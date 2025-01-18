import { Tabs } from 'expo-router';
import { View, Text, Image } from 'react-native';
import icons from '../../constants/icons';

const TabIcon = ({ icon, color, focused, name }) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image 
                source={icon}
                resizeMode='contain'
                tintColor={color}
                style={{ width: 32, height: 32 }}
            />
            <Text className={`${focused ? 'font-bold' : 'font-normal'} font-inter text-xs`} style={{ color: color, }}>{name}</Text>
        </View>
    );
}

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#007BFF',
                tabBarInactiveTintColor: '#DDD',
                tabBarStyle: {
                    backgroundColor: '#333',
                    borderTopWidth: 1,
                    borderTopColor: '#DDD',
                    height: 80,
                }
                
            }}
        >
            <Tabs.Screen
                name="events"
                options={{
                    title: 'Attendance',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.plist}
                            name="Attendance"
                            color={color}
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="timetable"
                options={{
                    title: 'Timetable',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.table}
                            name="Timetable"
                            color={color}
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="metrics"
                options={{
                    title: 'Metrics',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.analytics}
                            name="Metrics"
                            color={color}
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.person}
                            name="Profile"
                            color={color}
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    )
}