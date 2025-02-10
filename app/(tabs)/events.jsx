import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UpcomingAttendance() {
    return (
        <SafeAreaView>
            <View>
                <Text>UpcomingAttendance</Text>
            </View>
            <StatusBar style="dark"/>
        </SafeAreaView>
    );
}
