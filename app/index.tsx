import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect, router } from 'expo-router';
import images from "../constants/images";
import CustomButton from '../components/CustomButton';

export default function App() {
    return (
        <SafeAreaView
            className='bg-white h-full'
            style={{
                height: '100%',
            }}
        >
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View
                    className='items-center justify-center px-4'
                    style={{
                        height: '85vh',
                        width: '100%',
                    }}
                >
                    <Image
                      source={images.uniben_logo}
                      resizeMode="contain"
                      style={{
                        width: 150,
                        height: 150,
                      }}
                    />

                    <Image 
                        source={images.dsars_logo}
                        resizeMode='contain'
                        style={{
                            width: '100%',
                            maxWidth: 400,
                            height: 300,
                        }}
                    />

                    <Text className='text-xl text-black-100 font-inter font-semibold'>Dynamic and Secure Attendance Recording System</Text>
                    <Text className='text-2xl text-black font-inter font-bold'>UNIVERSITY OF BENIN</Text>

                    <CustomButton
                        title='Get Started'
                        handlePress={() => router.push('/events')}
                        containerStyles='w-full'
                        textStyles='font-semibold'
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}