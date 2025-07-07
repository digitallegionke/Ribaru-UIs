import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

export function OnboardingFeaturesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Why Ribaru?</Text>
      <View style={styles.featuresList}>
        <Text style={styles.feature}>• Track sales and inventory in real time</Text>
        <Text style={styles.feature}>• Manage users and permissions</Text>
        <Text style={styles.feature}>• Get business insights and reports</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnboardingGetStarted' as never)}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('MockLogin' as never)}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9FAFB' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0A1FDA', marginBottom: 32 },
  featuresList: { marginBottom: 32, paddingHorizontal: 32 },
  feature: { fontSize: 16, color: '#374151', marginBottom: 12 },
  button: { backgroundColor: '#0A1FDA', borderRadius: 12, paddingVertical: 16, paddingHorizontal: 48, marginBottom: 16 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
  skipButton: { marginTop: 8 },
  skipButtonText: { color: '#6B7280', fontSize: 16 },
}); 