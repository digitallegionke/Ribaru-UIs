import React from 'react';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text, Button } from '../components';
import { COLORS, SPACING } from '../utils/constants';

export function OnboardingWelcomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/icon.png')} style={styles.logo} />
      </View>
      <Text variant="h1" weight="bold" color="primary" style={styles.title}>Welcome to Ribaru</Text>
      <Text variant="body1" color="gray.500" style={styles.subtitle}>Your smart inventory and sales companion.</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('OnboardingFeatures' as never)}
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
  logoContainer: { 
    marginBottom: SPACING['4xl'] 
  },
  logo: { 
    width: 100, 
    height: 100, 
    resizeMode: 'contain' 
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
    marginBottom: SPACING.lg,
    minWidth: 200
  },
  skipButton: { 
    marginTop: SPACING.sm,
    minWidth: 200
  },
}); 