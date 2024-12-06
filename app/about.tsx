import React from "react";
import { Text, View, StyleSheet, ScrollView, Image, Linking } from "react-native";
import { Animated } from "react-native";

export default function About() {
  // Animation for the content fading in
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View style={[styles.animatedContainer, { opacity: fadeAnim }]}>
        <Image
          source={{ uri: 'https://www.validate-network.org/sites/default/files/styles/mt_image_small/public/validate/images/media/university_of_benin.png?itok=IwvcUadP' }} // Replace with your logo URL
          style={styles.logo}
        />
        <Text style={styles.heading}>About This App</Text>
        <Text style={styles.paragraph}>
          This app is a robust and easy-to-use attendance system designed to enable
          quick and reliable tracking of student attendance. Lecturers can take
          attendance with a few taps, making the process efficient and transparent.
        </Text>
        <Text style={styles.subheading}>Key Features:</Text>
        <Text style={styles.paragraph}>- Real-time attendance tracking</Text>
        <Text style={styles.paragraph}>- User-friendly interface</Text>
        <Text style={styles.paragraph}>- Secure data storage for student records</Text>
        <Text style={styles.paragraph}>- Instant report generation</Text>

        <Text style={styles.subheading}>Developed By:</Text>
        <Text style={styles.paragraph}>
          A dedicated group of students from the Faculty of Physical Sciences,
          University of Benin. Our mission is to simplify administrative processes
          for educators while ensuring a seamless user experience.
        </Text>

        <Text style={styles.subheading}>Meet The Team:</Text>
        <Text style={styles.paragraph}>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://github.com/Osalotioman/')}
          >
            Osalotioman
          </Text>
        </Text>
        <Text style={styles.paragraph}>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://github.com/NeoVoidPlus/')}
          >
            NeoVoid
          </Text>
        </Text>
        <Text style={styles.paragraph}>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://github.com/IghaloGenesisOsasenaga/')}
          >
            Genesis
          </Text>
        </Text>
        <Text style={styles.paragraph}>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://github.com/Sbog304/')}
          >
            Praise
          </Text>
        </Text>
        <Text style={styles.paragraph}>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://github.com/Samuel101-crypto/')}
          >
            Dare
          </Text>
        </Text>
        <Text style={styles.paragraph}>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://github.com/osawese-ninja27/')}
          >
            Moyo
          </Text>
        </Text>

        <Text style={styles.subheading}>Connect with Us:</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://github.com/Osalotioman/Attendance_System')}
        >
          GitHub Repository - Currently Private
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('mailto:nelsonel262@gmail.com')}
        >
          Contact Us
        </Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 A Group of Physical Science Students - University of Benin</Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // Removed flex: 1 here so it doesn't force the content into strange dimensions
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  animatedContainer: {
    flexGrow: 1, // Ensures content takes up full height but can grow based on content
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 20, // Adds some space at the bottom of the content
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#2c3e50",
  },
  subheading: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    marginTop: 15,
    marginBottom: 5,
    color: "#34495e",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
    marginBottom: 10,
    color: "#7f8c8d",
  },
  link: {
    fontSize: 16,
    color: "#3498db",
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  footer: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: "#ecf0f1",
    paddingTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: "#95a5a6",
    textAlign: "center",
  },
});
