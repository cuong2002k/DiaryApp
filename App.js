import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './Screen/Login';
import Register from './Screen/Register';
import Home from './Screen/Home';
import DetailsDiary from './Screen/DetailsDiary';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import EditDiary from './Screen/EditDiary';
import CreateDiary from './Screen/CreateDiary';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabs from './Component/HomeTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider
        theme={MD3LightTheme}
      >
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
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
