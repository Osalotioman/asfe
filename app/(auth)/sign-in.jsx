import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const SignIn = () => {
    return (
        <View className="flex-1 justify-center items-center bg-gray-100">
            <View className="bg-white p-5 rounded-lg shadow-lg w-11/12 max-w-md">
                <Text className="text-2xl font-bold mb-5 text-center">Sign In</Text>
                <View className="w-full">
                    <View className="mb-4">
                        <Text className="text-sm font-bold text-gray-700 mb-2">Username</Text>
                        <TextInput
                            className="h-10 border border-gray-300 rounded px-3 bg-white"
                            placeholder='Enter your username'
                            keyboardType='text'
                            autoCapitalize="none"
                        />
                    </View>
                    <View className="mb-4">
                        <Text className="text-sm font-bold text-gray-700 mb-2">Password</Text>
                        <TextInput
                            className="h-10 border border-gray-300 rounded px-3 bg-white"
                            placeholder="Enter your password"
                            secureTextEntry
                        />
                    </View>
                    <View className="flex-row justify-between items-center">
                        <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded">
                            <Text className="text-white font-bold">Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text className="text-blue-500 font-bold">Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SignIn;
