import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    GeistSans: require('./assets/fonts/Geist/static/Geist-Regular.ttf'),
    GeistSansMedium: require('./assets/fonts/Geist/static/Geist-Medium.ttf'),
    GeistSansSemiBold: require('./assets/fonts/Geist/static/Geist-SemiBold.ttf'),
    GeistSansBold: require('./assets/fonts/Geist/static/Geist-Bold.ttf'),
    GeistMono: require('./assets/fonts/Geist_Mono/static/GeistMono-Regular.ttf'),
    GeistMonoMedium: require('./assets/fonts/Geist_Mono/static/GeistMono-Medium.ttf'),
    GeistMonoSemiBold: require('./assets/fonts/Geist_Mono/static/GeistMono-SemiBold.ttf'),
    GeistMonoBold: require('./assets/fonts/Geist_Mono/static/GeistMono-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
        <StatusBar style="dark" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}