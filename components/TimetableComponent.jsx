import { useEffect, useRef, memo } from 'react';
import { View, Text, FlatList, Dimensions, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';

const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
const dayCardWidth = Math.min(Dimensions.get('window').width * 0.8, 400);

/** ClassItem - Displays a single class */
const ClassItem = memo(({ cls }) => (
    <View className="bg-gray-100 rounded-md p-3 mb-2">
        <Text className="text-lg font-semibold text-gray-900 font-inter">{cls.subject}</Text>
        <Text className="text-sm text-gray-600 font-inter">Time: {cls.time}</Text>
        <Text className="text-sm text-gray-600 font-inter">Duration: {cls.duration} mins</Text>
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
            className={`w-[80vw] max-w-[400px] p-4 h-[400px] rounded-lg shadow-sm ${
                isCurrent ? 'bg-blue-200' : 'bg-white'
            }`}
        >
            <Text className="text-2xl font-bold text-gray-800 mb-3 font-inter">{day.day}</Text>
            <FlatList 
                data={day.classes} 
                keyExtractor={(cls, index) => index.toString()} 
                renderItem={({ item }) => <ClassItem cls={item} />}
                nestedScrollEnabled
            />
        </View>
    </Animatable.View>
));

/** Timetable - Main component */
const Timetable = ({ schedule }) => {
    const flatListRef = useRef(null);
    const currentDayIndex = schedule.findIndex(day => day.day === currentDay);

    useEffect(() => {
        if (flatListRef.current && currentDayIndex !== -1) {
            flatListRef.current.scrollToIndex({ index: currentDayIndex, animated: true });
        }
    }, [currentDayIndex]);

    return (
        <FlatList
            className=" border-2 border-blue-500 flex-grow"
            ref={flatListRef}
            data={schedule}
            keyExtractor={(day, index) => index.toString()}
            renderItem={({ item }) => <DayItem day={item} isCurrent={item.day === currentDay} />}
            horizontal
            nestedScrollEnabled={true}  // Enable scrolling inside parent list
            keyboardShouldPersistTaps="handled"
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{ flexGrow: 1 }} // Allow full scrolling space
            scrollEnabled={true} // Ensure scroll is allowed
            initialScrollIndex={0}
            getItemLayout={(data, index) => ({ length: dayCardWidth, offset: dayCardWidth * index, index })}
        />
    );
};
export default Timetable;

