import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View } from "react-native";
import Home from "../Screen/Home";
import CreateDiary from "../Screen/CreateDiary";
import Profile from "../Screen/Profile";
import { Feather, Ionicons } from "@expo/vector-icons";


const Tab = createMaterialBottomTabNavigator();
export default function HomeTabs() {
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
                        height: 70,
                        backgroundColor: cardcolor,
                        borderTopWidth: 0,
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="home" color={color} size={20} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Add"
                    component={CreateDiary}
                    options={{
                        tabBarLabel: "Add",
                        tabBarIcon: ({ size }) => (
                            <View
                            // style={{
                            //     top: -30,
                            //     width: 70,
                            //     height: 70,
                            //     borderRadius: 35,
                            //     backgroundColor: primarycolor,
                            //     justifyContent: "center",
                            //     alignItems: "center",
                            //     elevation: 10,
                            // }}
                            >
                                <Ionicons name="pencil" color="black" size={20} />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="settings"
                    component={Profile}
                    options={{
                        tabBarLabel: "Settings",
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="settings" color={color} size={20} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
    );
}
