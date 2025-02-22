import { useRef, useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";
import images from "../constants/images";

export default function ManualCapture({ onCapture }) {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    (async () => {
      await requestPermission();
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);
      onCapture(photo.uri);
    }
  };

  const retakePicture = () => {
    setCapturedImage(null);
  };

  return (
    <View className="flex-1 items-center justify-center p-4">
      {capturedImage ? (
        // Show the captured image with a retake button
        <View className="relative w-full h-[500px] rounded-lg overflow-hidden">
          <Image source={{ uri: capturedImage }} className="w-full h-full rounded-lg" resizeMode="cover" />

          {/* Retake button */}
          <TouchableOpacity
            onPress={retakePicture}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-5 py-3 rounded-lg shadow-md flex-row items-center"
          >
            <FontAwesome name="redo" size={20} color="black" />
            <Text className="ml-2 text-lg font-bold font-inter">Retake</Text>
          </TouchableOpacity>
        </View>
      ) : permission?.granted ? (
        // Camera view with overlay when no image is captured
        <View className="relative w-full h-[500px] rounded-lg overflow-hidden">
          <CameraView ref={cameraRef} facing="front" className="w-full h-full rounded-lg">
            <Image
              source={images.face_scanner_frame}
              style={{
                width: "90%",
                height: "90%", 
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              resizeMode="contain"
              tintColor="white"
            />
          </CameraView>

          {/* Capture button */}
          <TouchableOpacity
            onPress={takePicture}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-5 py-3 rounded-lg shadow-md flex-row items-center"
          >
            <FontAwesome name="camera" size={20} color="black" />
            <Text className="ml-2 font-inter text-lg font-bold">Capture</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Fallback UI when no camera is detected
        <View className="w-full h-[500px] rounded-lg border-2 border-dashed border-gray-400 flex items-center justify-center">
          <FontAwesome name="camera" size={50} color="gray" />
          <Text className="mt-4 text-gray-500 font-inter text-lg">
            {permission === null ? "Requesting camera permission..." : "No camera detected"}
          </Text>
        </View>
      )}
    </View>
  );
}