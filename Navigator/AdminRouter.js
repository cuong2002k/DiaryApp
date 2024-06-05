import { View, Text, Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AdminHome from '../Screen/AdminHome';
import AdminProfile from '../Screen/AdminProfile';
import AdminTabs from '../Component/AdminTabs';
import UserDetails from '../Screen/UserDetails';
const Stack = createNativeStackNavigator();
const AdminRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          marginTop:
            Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
        },
      }}
    >
      <Stack.Screen name='AdminHome' component={AdminTabs} options={{ headerShown: false }} />
      <Stack.Screen name='userDetails' component={UserDetails} options={{ headerShown: false }} />
      {/* <Stack.Screen name='AdminProfile' component={AdminProfile} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  )
}

export default AdminRouter