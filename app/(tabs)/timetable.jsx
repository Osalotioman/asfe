import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Timetable from '../../components/TimetableComponent';
import { getTimetableData } from '../../api/auth';

export default function TimetableScreen() {
    const [schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getTimetableData();
                setSchedule(data);
            } catch (error) {
                console.error('Failed to fetch timetable data:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return (
            <View className='bg-primary flex-1 items-center justify-center'>
                <Text className='text-secondary text-xl'>Loading timetable...</Text>
            </View>
        );
    }

    return (
        <ScrollView className=' flex-1'>
            <View className='p-4'>
                <Timetable schedule={schedule} />
            </View>
        </ScrollView>
    );
}
