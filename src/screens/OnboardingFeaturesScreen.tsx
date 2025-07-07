import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text } from '../components';

export function OnboardingFeaturesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="h1" weight="bold" style={styles.title}>Why Ribaru?</Text>
      <View style={styles.featuresList}>
        <Text variant="body1" style={styles.feature}>• Track sales and inventory in real time</Text>
        <Text variant="body1" style={styles.feature}>• Manage users and permissions</Text>
        <Text variant="body1" style={styles.feature}>• Get business insights and reports</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnboardingGetStarted' as never)}>
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
  title: { fontSize: 28, fontWeight: 'bold', color: '#0A1FDA', marginBottom: 12 },
  featuresList: { marginBottom: 32, alignItems: 'flex-start', paddingHorizontal: 32 },
  feature: { fontSize: 16, color: '#6B7280', marginBottom: 8 },
  button: { backgroundColor: '#0A1FDA', borderRadius: 12, paddingVertical: 16, paddingHorizontal: 48, marginBottom: 16 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
  skipButton: { marginTop: 8 },
  skipButtonText: { color: '#6B7280', fontSize: 16 },
}); 