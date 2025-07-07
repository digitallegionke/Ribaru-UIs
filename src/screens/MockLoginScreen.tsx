import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text } from '../components';

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
        <Text variant="h1" weight="bold" style={styles.title}>Login</Text>
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
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text variant="button" weight="semiBold" style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipButton} onPress={handleLogin}>
            <Text variant="body1" color="gray.500" style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9FAFB' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0A1FDA', marginBottom: 12 },
  form: { width: '100%', maxWidth: 400, padding: 24 },
  input: { backgroundColor: 'white', borderRadius: 12, paddingVertical: 16, paddingHorizontal: 16, fontSize: 16, borderWidth: 1, borderColor: '#E5E7EB', marginBottom: 16 },
  button: { backgroundColor: '#0A1FDA', borderRadius: 12, paddingVertical: 16, alignItems: 'center', marginBottom: 16 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
  skipButton: { alignItems: 'center' },
  skipButtonText: { color: '#6B7280', fontSize: 16 },
}); 