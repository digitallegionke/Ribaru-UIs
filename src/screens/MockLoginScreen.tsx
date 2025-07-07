import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text, Button } from '../components';
import { COLORS, SPACING, BORDER_RADIUS } from '../utils/constants';

export function MockLoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('MainTabs' as never);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Text variant="h1" weight="bold" color="primary" style={styles.title}>Login</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button
            title="Login"
            onPress={handleLogin}
            variant="primary"
            size="lg"
            style={styles.button}
          />
          <Button
            title="Skip"
            onPress={handleLogin}
            variant="ghost"
            size="lg"
            style={styles.skipButton}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
  form: { 
    width: '100%', 
    maxWidth: 400, 
    padding: SPACING['3xl'] 
  },
  input: { 
    backgroundColor: COLORS.background.card, 
    borderRadius: BORDER_RADIUS.lg, 
    paddingVertical: SPACING.lg, 
    paddingHorizontal: SPACING.lg, 
    fontSize: 16, 
    borderWidth: 1, 
    borderColor: COLORS.gray[200], 
    marginBottom: SPACING.lg 
  },
  button: { 
    marginBottom: SPACING.lg 
  },
  skipButton: { 
    alignItems: 'center' 
  },
}); 