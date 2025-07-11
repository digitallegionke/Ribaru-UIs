import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const paymentMethods = ['Cash', 'Card', 'Mobile Money', 'Other'];

export function AddPaymentOptionScreen() {
  const navigation = useNavigation();
  const [method, setMethod] = useState('');

  const handleSave = () => {
    if (method) {
      navigation.goBack();
      // In a real app, you would pass the payment option back via params or a callback
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Payment Option</Text>
          <View style={{ width: 24 }} />
        </View>
        <View style={styles.form}>
          <Text style={styles.sectionTitle}>Saved Payment Options</Text>
          <View style={styles.mockList}>
            <View style={styles.mockRow}><Text style={styles.mockMethod}>Visa Card (**** 1234)</Text></View>
            <View style={styles.mockRow}><Text style={styles.mockMethod}>M-Pesa (254712345678)</Text></View>
            <View style={styles.mockRow}><Text style={styles.mockMethod}>Cash</Text></View>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Payment Method</Text>
            {paymentMethods.map((pm) => (
              <TouchableOpacity
                key={pm}
                style={[styles.methodButton, method === pm && styles.selectedMethod]}
                onPress={() => setMethod(pm)}
              >
                <Text style={[styles.methodText, method === pm && styles.selectedMethodText]}>{pm}</Text>
              </TouchableOpacity>
            ))}
            <TextInput
              style={styles.input}
              value={method}
              onChangeText={setMethod}
              placeholder="Other (type here)"
            />
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={!method}>
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
  methodButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 8,
  },
  selectedMethod: {
    borderColor: '#1D4ED8',
    backgroundColor: '#EEF2FF',
  },
  methodText: {
    fontSize: 16,
    color: '#6B7280',
  },
  selectedMethodText: {
    color: '#1D4ED8',
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginTop: 8,
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
  mockRow: { backgroundColor: '#F3F4F6', borderRadius: 8, padding: 12, marginBottom: 6 },
  mockMethod: { fontSize: 15, color: '#111827', fontWeight: '500' },
}); 