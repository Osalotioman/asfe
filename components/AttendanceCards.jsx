import React from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';

const AttendanceCard = ({ name, duration, status, onPress }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={{ width: width * 0.9 }} className="bg-white rounded-xl p-5 my-3 shadow-md">
            <View className="flex-row justify-between items-center mb-2">
                <Text className="text-xl font-bold">{name}</Text>
                <Text className={`text-xs font-semibold px-2 py-1 rounded-md ${status === 'Ongoing' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}> 
                    {status}
                </Text>
            </View>
            <Text className="text-sm text-gray-600 mb-3">Duration: {duration} mins</Text>
            {status === 'Ongoing' && (
                <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-lg w-auto ml-auto" onPress={onPress}>
                    <Text className="text-white font-bold">View</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const AttendanceCards = ({ records, onSignIn }) => {
    return (
        <View className="p-4 items-center">
            {records.map((record, index) => (
                <AttendanceCard key={index} {...record} onPress={() => onSignIn(record.name)} />
            ))}
        </View>
    );
};

export { AttendanceCard, AttendanceCards };
