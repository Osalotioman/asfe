import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, RefreshControl, ScrollView } from 'react-native';
import Timetable from '../../components/TimetableComponent';
import { getTimetableData } from '../../api/auth';
import { EventCard } from '../../components/EventCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TimetableScreen() {
    const [schedule, setSchedule] = useState({ timetable: [], events: [] });
    const [refreshing, setRefreshing] = useState(true);

    const onRefresh = async () => {
        try {
            setRefreshing(true);
            const data = await getTimetableData();
            setSchedule(data);
            console.log('Timetable data:', schedule);
        } catch (error) {
            console.error('Failed to fetch timetable data:', error);
        } finally {
            setRefreshing(false);
        }
    }

    useEffect(() => {
        onRefresh();
    }, []);

    if (refreshing) {
        return (
            <View className='bg-gray-100 flex-1 items-center justify-center'>
                <Text className='text-secondary text-xl'>Loading timetable...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView className='h-full bg-gray-100'>
            <View
                className='flex-grow px-2 justify-center'
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
            >
                <View className="w-full px-2">
                    <Text className="text-2xl font-bold text-gray-800 my-3 font-inter">Class Timetable</Text>
                    <Timetable schedule={schedule.timetable}/>
                </View>
                <FlatList
                    className='px-2'
                    data = {schedule.events}
                    keyExtractor={(item) => item.id}
                    nestedScrollEnabled={true}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <EventCard
                            title={item.title}
                            description={item.description}
                            location={item.location}
                            date={item.date}
                        />
                    )}
                    scrollEnabled={true}
                    ListHeaderComponent={<Text className="text-2xl font-bold text-gray-800 my-3 font-inter">Upcoming Events</Text>}
                />
            </View>
        </SafeAreaView>
    );
}
