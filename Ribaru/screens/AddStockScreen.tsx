import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function AddStockScreen() {
  const navigation = useNavigation();
  const [productName, setProductName] = useState('');
  const [sku, setSku] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleAddStock = () => {
    // Implement stock addition logic here
    console.log('Adding stock:', { productName, sku, quantity, price, description });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add Stock</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          value={productName}
          onChangeText={setProductName}
        />
        <TextInput
          style={styles.input}
          placeholder="SKU"
          value={sku}
          onChangeText={setSku}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textArea}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddStock}>
        <Text style={styles.addButtonText}>Add Stock</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
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
  textArea: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#1D4ED8',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  addButtonText: {
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

