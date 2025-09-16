// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout(){
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
            <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
            }}
            />
            <Tabs.Screen
            name="message"
            options={{
                title: 'Message',
                tabBarIcon: ({ color }) => <Ionicons name="mail-outline" size={24} color={color} />,
            }}
            />
            <Tabs.Screen
            name="account"
            options={{
                title: 'Account',
                tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
            }}
            />
        </Tabs>
    )
}