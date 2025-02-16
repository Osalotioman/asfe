import { useEffect, useRef, memo } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';

const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

/** ClassItem - Displays a single class */
const ClassItem = memo(({ cls }) => (
    <View className="bg-gray-100 rounded-md p-3 mb-2">
        <Text className="text-lg font-semibold text-gray-900">{cls.subject}</Text>
        <Text className="text-sm text-gray-600">Time: {cls.time}</Text>
        <Text className="text-sm text-gray-600">Duration: {cls.duration} mins</Text>
    </View>
));

/** DayItem - Displays a day's schedule */
const DayItem = memo(({ day, isCurrent }) => (
    <Animatable.View
        animation={isCurrent ? { 0: {scale: 0.9}, 1: {scale: 1}} : {0: {scale: 1}, 1: {scale: 0.9}}}
        duration={1000}
        className="mr-4"
    >
        <View
            className={`w-[80vw] max-w-[400px] p-4 bg-white rounded-lg shadow-md border-2 ${
                isCurrent ? 'border-blue-500 bg-blue-400' : 'border-gray-200'
            }`}
        >
            <Text className="text-xl font-bold text-gray-800 mb-3">{day.day}</Text>
            <FlatList 
                data={day.classes} 
                keyExtractor={(cls, index) => index.toString()} 
                renderItem={({ item }) => <ClassItem cls={item} />}
            />
        </View>
    </Animatable.View>
));

/** Timetable - Main component */
const Timetable = ({ schedule }) => {
    const scrollViewRef = useRef(null);
    const currentDayIndex = schedule.findIndex(day => day.day === currentDay);

    useEffect(() => {
        if (scrollViewRef.current && currentDayIndex !== -1) {
            scrollViewRef.current.scrollTo({ x: currentDayIndex * 320, animated: true });
        }
    }, [currentDayIndex]);

    return (
        <ScrollView
            horizontal
            className="p-4"
            ref={scrollViewRef}
            showsHorizontalScrollIndicator={false}
        >
            <FlatList
                data={schedule}
                horizontal
                keyExtractor={(day, index) => index.toString()}
                renderItem={({ item }) => <DayItem day={item} isCurrent={item.day === currentDay} />}
            />
        </ScrollView>
    );
};

export default Timetable;

