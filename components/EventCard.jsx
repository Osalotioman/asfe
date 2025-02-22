import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const EventCard = ({ title, description, date, location }) => {
    return (
        <View className="bg-white rounded-lg p-5 my-3 w-[90vw] max-w-[600px] shadow-md">
            <View className="flex-row justify-between items-center mb-2">
                <Text className="text-xl font-inter font-bold">{title}</Text>
                <Text className="text-sm font-inter text-gray-600">{date}</Text>
            </View>
            <Text className="text-base font-inter text-gray-800 mb-3">{description}</Text>
            <Text className="text-sm font-inter text-gray-600 mb-3">Location: {location}</Text>
        </View>
    );
};


export { EventCard };
