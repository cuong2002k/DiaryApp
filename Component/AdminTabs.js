import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import AdminProfile from '../Screen/AdminProfile';
import { STYLE } from '../Style/style';
import AdminHome from '../Screen/AdminHome';
import { Feather } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();
const AdminTabs = () => {
    const primarycolor = "#7856FF";
    const bgcolor = "#f5f5f5";
    const cardcolor = "white";
    return (
        <View style={{ backgroundColor: bgcolor, flex: 1 }}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: primarycolor,
                    tabBarStyle: {
                        postion: "absolute",
                        bottom: 25,
                        marginRight: 10,
                        marginLeft: 10,
                        elevation: 10,
                        borderRadius: 15,
                        backgroundColor: STYLE.blue,
                        borderTopWidth: 0,
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={AdminHome}
                    options={{
                        tabBarLabel: "Trang chủ",
                        tabBarIcon: 'home',
                    }}
                />
                <Tab.Screen
                    name="account"
                    component={AdminProfile}
                    options={{
                        tabBarLabel: "Cá nhân",
                        tabBarIcon: 'account',
                    }}
                />
            </Tab.Navigator>
        </View>
    );
}

export default AdminTabs

const styles = StyleSheet.create({})