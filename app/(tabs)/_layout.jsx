import { Tabs } from 'expo-router';
import TabBar from '../../components/TabBar';


export default function TabsLayout() {
    return (
        <Tabs
            tabBar={props => <TabBar {...props} />}
        >
            <Tabs.Screen
                name="events"
                options={{
                    title: 'Attendance',
                    headerShown: true,
                }}
            />
            <Tabs.Screen
                name="timetable"
                options={{
                    title: 'Timetable',
                    headerShown: true,
                }}
            />
            <Tabs.Screen
                name="metrics"
                options={{
                    title: 'Metrics',
                    headerShown: true,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: true,
                }}
            />
        </Tabs>
    )
}