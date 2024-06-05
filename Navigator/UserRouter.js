
import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from '../Component/HomeTabs';
import EditDiary from '../Screen/EditDiary';
import DetailsDiary from '../Screen/DetailsDiary';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();

const UserRouter = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    marginTop:
                        Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
                },
            }}

        >
            <Stack.Screen
                name="HomeTabs"
                component={HomeTabs}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="EditDiary"
                component={EditDiary}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DetailsDiary"
                component={DetailsDiary}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}

export default UserRouter

const styles = StyleSheet.create({})