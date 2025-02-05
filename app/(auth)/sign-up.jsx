import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';
import { SafeAreaView } from 'react-native-safe-area-context';
import image from '../../constants/images';
import { useState } from 'react';
import { Link } from 'expo-router';

const SignUp = () => {
    const [form, setForm] = useState({ 
        fullName: "",   
        matricNumber: "",
        department: "",
        faculty: "",
        phoneNumber: "",
        gender: "",
        email: "", 
        password: "",
        confirmPassword: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = () => {};

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView>
                <View className="w-full justify-center min-h-[85vh] px-5 my-6">
                    <Image
                        source={image.dsars_logo}
                        resizeMode="contain"
                        style={{
                            width: 100,
                            height: 100,
                        }}
                    />
                    <Text className="text-2xl font-bold mb-7">Sign Up to Attendance System</Text>
                    <FormField 
                        value={form.email} 
                        placeholder="Enter your email" 
                        label="Email"
                        handleChangeText={(text) => setForm({ ...form, email: text })}
                        otherStyles="mb-7"
                    />
                    <FormField
                        value={form.password}
                        placeholder="Enter your password"
                        label="Password"
                        secureTextEntry={true}
                        handleChangeText={(text) => setForm({ ...form, password: text })}
                        otherStyles="mb-7"
                    />
                    <CustomButton
                        title="Sign In"
                        handlePress={submitForm}
                        isLoading={isSubmitting}
                    />

                    <View className="mt-5 flex flex-row justify-between">
                        <Text className="text-md">Already have an account?</Text>
                        <Link href="/sign-up">
                            <Text className="text-md text-blue-500">Sign Up</Text>
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
