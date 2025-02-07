import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';
import { SafeAreaView } from 'react-native-safe-area-context';
import image from '../../constants/images';
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

    const inputFields = [
        { label: "Email", name: "email", placeholder: "Enter your email", secureTextEntry: false },
        { label: "Password", name: "password", placeholder: "Enter your password", secureTextEntry: true },
        { label: "Confirm Password", name: "confirmPassword", placeholder: "Confirm your password", secureTextEntry: true },
        { label: "Full Name", name: "fullName", placeholder: "Enter your full name", secureTextEntry: false },
        { label: "Matric Number", name: "matricNumber", placeholder: "Enter your matric number", secureTextEntry: false },
        { label: "Department", name: "department", placeholder: "Enter your department", secureTextEntry: false },
        { label: "Faculty", name: "faculty", placeholder: "Enter your faculty", secureTextEntry: false },
        { label: "Phone Number", name: "phoneNumber", placeholder: "Enter your phone number", secureTextEntry: false },
        { label: "Gender", name: "gender", placeholder: "Select your gender", secureTextEntry: false, selectOptions: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }] }
    ];

    const submitForm = () => {
        // Implement form submission logic
    };

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

                    {/* Dynamically render input fields based on JSON */}
                    {inputFields.map((field, index) => (
                        <FormField
                            key={index}
                            value={form[field.name]}
                            placeholder={field.placeholder}
                            label={field.label}
                            secureTextEntry={field.secureTextEntry}
                            selectOptions={field.selectOptions}
                            handleChangeText={(text) => setForm({ ...form, [field.name]: text })}
                            otherStyles="mb-7"
                        />
                    ))}

                    <CustomButton
                        title="Sign Up"
                        handlePress={submitForm}
                        isLoading={isSubmitting}
                    />

                    <View className="mt-5 flex flex-row justify-between">
                        <Text className="text-md">Already have an account?</Text>
                        <Link href="/sign-in">
                            <Text className="text-md text-blue-500">Sign In</Text>
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
