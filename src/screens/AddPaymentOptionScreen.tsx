import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Payment Option</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.form}>
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
}); 