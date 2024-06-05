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
import UserRouter from './Navigator/UserRouter';
import HomeRouter from './Navigator/HomeRouter';
import { MyContextControllerProvider } from './Store';
import AdminRouter from './Navigator/AdminRouter';
SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <MyContextControllerProvider>
      <NavigationContainer>
        <PaperProvider
          theme={MD3LightTheme}
        >
          <HomeRouter />
        </PaperProvider>
      </NavigationContainer>
    </MyContextControllerProvider>

    // <NavigationContainer>
    //   <PaperProvider
    //     theme={MD3LightTheme}
    //   >
    //     <AdminRouter />
    //   </PaperProvider>
    // </NavigationContainer>
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
