import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text, Button } from '../components';
import { COLORS, SPACING } from '../utils/constants';

export function OnboardingGetStartedScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="h1" weight="bold" color="primary" style={styles.title}>Get Started</Text>
      <Text variant="body1" color="gray.500" style={styles.subtitle}>Ready to take control of your business?</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('MockLogin' as never)}
        variant="primary"
        size="lg"
        style={styles.button}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: COLORS.background.primary 
  },
  title: { 
    marginBottom: SPACING.md, 
    textAlign: 'center' 
  },
  subtitle: { 
    marginBottom: SPACING['4xl'], 
    textAlign: 'center', 
    paddingHorizontal: SPACING['4xl'] 
  },
  button: { 
    minWidth: 200
  },
}); 