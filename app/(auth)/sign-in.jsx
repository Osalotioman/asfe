import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/images';
import { useState } from 'react';
import { Link } from 'expo-router';
import { signIn } from '../../api/auth';
import { router } from 'expo-router';

const SignIn = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = () => {

        setIsSubmitting(true);

        signIn(form)
            .then((response) => {
                if(response.status === "success") {
                    router.replace('/events');
                }else{
                    console.log(response);
                    alert(response.messsage)
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView>
                <View className="w-full mx-auto justify-center min-h-[85vh] max-w-[600px] px-5 my-6">
                    <Image
                        source={images.dsars_logo}
                        resizeMode="contain"
                        style={{
                            width: 100,
                            height: 100,
                        }}
                    />
                    <Text className="text-2xl font-bold mb-7">Sign In to Attendance System</Text>
                    <FormField 
                        value={form.email} 
                        placeholder="Enter your email" 
                        label="Email"
                        handleChangeText={(text) => setForm({ ...form, email: text })}
                        otherStyles="mb-4"
                    />
                    <FormField
                        value={form.password}
                        placeholder="Enter your password"
                        label="Password"
                        secureTextEntry={true}
                        handleChangeText={(text) => setForm({ ...form, password: text })}
                        otherStyles="mb-4"
                    />
                    <CustomButton
                        title="Sign In"
                        handlePress={submitForm}
                        isLoading={isSubmitting}
                    />

                    <View className="mt-4 flex flex-row justify-between">
                        <Text className="text-md">Don't have an account?</Text>
                        <Link href="/sign-up">
                            <Text className="text-md text-blue-500">Sign Up</Text>
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
