import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screen/Login';
import Register from '../Screen/Register';
import UserRouter from './UserRouter';
import AdminRouter from './AdminRouter';
import ForgotPassword from '../Screen/ForgotPassword';
import UserDetails from '../Screen/UserDetails';

const Stack = createNativeStackNavigator();

const HomeRouter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
            <Stack.Screen name='userRouter' component={UserRouter} options={{ headerShown: false }} />
            <Stack.Screen name='adminRouter' component={AdminRouter} options={{ headerShown: false }} />
            <Stack.Screen name='forgotPassword' component={ForgotPassword} options={{ headerShown: false }} />
            

        </Stack.Navigator>
    )
}

export default HomeRouter