import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text, Button } from '../components';
import { COLORS, SPACING } from '../utils/constants';

export function OnboardingFeaturesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="h1" weight="bold" color="primary" style={styles.title}>Why Ribaru?</Text>
      <View style={styles.featuresList}>
        <Text variant="body1" color="gray.500" style={styles.feature}>• Track sales and inventory in real time</Text>
        <Text variant="body1" color="gray.500" style={styles.feature}>• Manage users and permissions</Text>
        <Text variant="body1" color="gray.500" style={styles.feature}>• Get business insights and reports</Text>
      </View>
      <Button
        title="Next"
        onPress={() => navigation.navigate('OnboardingGetStarted' as never)}
        variant="primary"
        size="lg"
        style={styles.button}
      />
      <Button
        title="Skip"
        onPress={() => navigation.navigate('MockLogin' as never)}
        variant="ghost"
        size="lg"
        style={styles.skipButton}
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
    marginBottom: SPACING['3xl'], 
    textAlign: 'center' 
  },
  featuresList: { 
    marginBottom: SPACING['4xl'], 
    alignItems: 'flex-start', 
    paddingHorizontal: SPACING['4xl'] 
  },
  feature: { 
    marginBottom: SPACING.sm 
  },
  button: { 
    marginBottom: SPACING.lg,
    minWidth: 200
  },
  skipButton: { 
    marginTop: SPACING.sm,
    minWidth: 200
  },
}); 