import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export function EditUserScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Fetch user data based on userId
    // This is a mock implementation. Replace with actual API call.
    const fetchUserData = async () => {
      // Simulating API call
      const userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '1234567890',
      };
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setEmail(userData.email);
      setPhone(userData.phone);
    };

    fetchUserData();
  }, [userId]);

  const handleUpdateUser = () => {
    // Implement user update logic here
    console.log('Updating user:', { userId, firstName, lastName, email, phone });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit User Details</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateUser}>
        <Text style={styles.updateButtonText}>Update User</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: '#1D4ED8',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  cancelButtonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '600',
  },
});

