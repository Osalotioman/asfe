import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";
import { useFrameProcessor } from "react-native-vision-camera";
import { scanFaces, Face } from "vision-camera-face-detector";
import { runOnJS } from "react-native-reanimated";

export default function FaceScanner({ onCapture }) {
  const device = useCameraDevice("front");
  const cameraRef = useRef<Camera>(null);
  const { hasPermission, requestPermission } = useCameraPermission();
  const [lastEyeState, setLastEyeState] = useState(null);
  const [blinkDetected, setBlinkDetected] = useState(false);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  const frameProcessor = useFrameProcessor((frame) => {
    "worklet";
    const faces = scanFaces(frame);

    if (faces.length > 0) {
      const face = faces[0]; // Take the first detected face
      const leftEyeOpen = face.leftEyeOpenProbability ?? 1;
      const rightEyeOpen = face.rightEyeOpenProbability ?? 1;

      if (leftEyeOpen > 0.6 && rightEyeOpen > 0.6) {
        runOnJS(setLastEyeState)("open");
      } else if (leftEyeOpen < 0.2 && rightEyeOpen < 0.2 && lastEyeState === "open") {
        runOnJS(setLastEyeState)("closed");
        runOnJS(setBlinkDetected)(true);
      }
    }
  }, []);

  useEffect(() => {
    if (blinkDetected) {
      capturePhoto();
      setBlinkDetected(false);
    }
  }, [blinkDetected]);

  const capturePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto();
      onCapture(photo.path); // Send photo to parent component
    }
  };

  if (!hasPermission) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>Camera access is required</Text>
        <Button title="Grant Access" onPress={requestPermission} />
      </View>
    );
  }

  if (!device) return <Text>No front camera found</Text>;

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        device={device}
        isActive={true}
        style={StyleSheet.absoluteFill}
        frameProcessor={frameProcessor}
      />
      <Text style={styles.overlayText}>Blink to capture</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  permissionContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  permissionText: { fontSize: 16, marginBottom: 10 },
  overlayText: {
    position: "absolute",
    top: 50,
    left: "50%",
    transform: [{ translateX: -50 }],
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
  },
});