import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text } from '../components';

export function OnboardingGetStartedScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="h1" weight="bold" style={styles.title}>Get Started</Text>
      <Text variant="body1" color="gray.500" style={styles.subtitle}>Ready to take control of your business?</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MockLogin' as never)}>
        <Text variant="button" weight="semiBold" style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9FAFB' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0A1FDA', marginBottom: 12 },
  subtitle: { fontSize: 16, color: '#6B7280', marginBottom: 32, textAlign: 'center', paddingHorizontal: 32 },
  button: { backgroundColor: '#0A1FDA', borderRadius: 12, paddingVertical: 16, paddingHorizontal: 48 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
}); 