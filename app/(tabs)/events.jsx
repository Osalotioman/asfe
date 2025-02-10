import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AttendanceCards } from '../../components/AttendanceCards';
import { getAttendanceData } from '../../api/auth';

export default function UpcomingAttendance() {
    const [attendanceData, setAttendanceData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAttendanceData();
                setAttendanceData(data);
            } catch (error) {
                console.error('Failed to fetch attendance data:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleSignIn = (name) => {
        console.log(`Signing in for ${name}`);
    };

    if (loading) {
        return (
            <SafeAreaView className="flex-1 bg-gray-50 justify-center items-center">
                <Text className="text-lg text-gray-600">Loading attendance data...</Text>
                <StatusBar style="auto" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView contentContainerStyle={{ padding: 16 }}>
                {attendanceData.length > 0 ? (
                    <AttendanceCards records={attendanceData} onSignIn={handleSignIn} />
                ) : (
                    <Text className="text-center text-gray-500">No upcoming attendance found.</Text>
                )}
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
