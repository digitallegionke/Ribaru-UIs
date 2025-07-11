import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function AddCustomerScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    if (name && phone) {
      navigation.goBack();
      // In a real app, you would pass the customer back via params or a callback
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Customer</Text>
          <View style={{ width: 24 }} />
        </View>
        <View style={styles.form}>
          <Text style={styles.sectionTitle}>Recent Customers</Text>
          <View style={styles.mockList}>
            <View style={styles.mockRow}><Text style={styles.mockName}>John Mwangi</Text><Text style={styles.mockPhone}>+254 701 234567</Text></View>
            <View style={styles.mockRow}><Text style={styles.mockName}>Mary Wanjiku</Text><Text style={styles.mockPhone}>+254 712 345678</Text></View>
            <View style={styles.mockRow}><Text style={styles.mockName}>Ali Yusuf</Text><Text style={styles.mockPhone}>+254 733 456789</Text></View>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Customer Name"
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Phone Number"
              keyboardType="phone-pad"
            />
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={!name || !phone}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  form: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  formGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#0A1FDA',
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  saveButton: {
    backgroundColor: '#0A1FDA',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionTitle: { fontSize: 14, color: '#0A1FDA', fontWeight: '500', marginBottom: 8 },
  mockList: { marginBottom: 16 },
  mockRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F3F4F6', borderRadius: 8, padding: 12, marginBottom: 6 },
  mockName: { fontSize: 15, color: '#111827', fontWeight: '500' },
  mockPhone: { fontSize: 14, color: '#6B7280' },
}); 