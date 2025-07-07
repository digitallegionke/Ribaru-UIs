import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text } from '../components';

export function OnboardingWelcomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/icon.png')} style={styles.logo} />
      </View>
      <Text variant="h1" weight="bold" style={styles.title}>Welcome to Ribaru</Text>
      <Text variant="body1" color="gray.500" style={styles.subtitle}>Your smart inventory and sales companion.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnboardingFeatures' as never)}>
        <Text variant="button" weight="semiBold" style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('MockLogin' as never)}>
        <Text variant="body1" color="gray.500" style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9FAFB' },
  logoContainer: { marginBottom: 32 },
  logo: { width: 100, height: 100, resizeMode: 'contain' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0A1FDA', marginBottom: 12 },
  subtitle: { fontSize: 16, color: '#6B7280', marginBottom: 32, textAlign: 'center', paddingHorizontal: 32 },
  button: { backgroundColor: '#0A1FDA', borderRadius: 12, paddingVertical: 16, paddingHorizontal: 48, marginBottom: 16 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
  skipButton: { marginTop: 8 },
  skipButtonText: { color: '#6B7280', fontSize: 16 },
}); 