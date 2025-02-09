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

    if (loading) {
        return (
            <SafeAreaView>
                <View style={{ padding: 16 }}>
                    <Text>Loading attendance data...</Text>
                </View>
                <StatusBar style="auto" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ padding: 16 }}>
                {attendanceData && attendanceData.length > 0 ? (
                    <AttendanceCards records={attendanceData} />
                ) : (
                    <Text>No upcoming attendance found.</Text>
                )}
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}