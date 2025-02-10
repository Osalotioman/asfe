import { SplashScreen, Stack } from "expo-router";
import { configureReanimatedLogger, ReanimatedLogLevel } from "react-native-reanimated";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false,
});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "Inter": require("../assets/fonts/Inter-VariableFont_opsz,wght.ttf")
    })

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) return null;

    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="(auth)" options={{headerShown: false}}/>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        </Stack>
    )
}
