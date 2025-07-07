import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import { ArrowLeft, Menu, Plus, ChevronDown } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function AddStockScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [productName, setProductName] = useState('');
  const [sku, setSku] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('3');
  const [price, setPrice] = useState('1,500');

  const handleAddStock = () => {
    // Handle add stock logic
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Stock</Text>
        <TouchableOpacity>
          <Menu size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Product Name */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Product Name*</Text>
          <TextInput
            style={styles.input}
            placeholder="Granola"
            value={productName}
            onChangeText={setProductName}
          />
        </View>

        {/* SKU */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>SKU*</Text>
          <TextInput
            style={styles.input}
            placeholder="32"
            value={sku}
            onChangeText={setSku}
            keyboardType="numeric"
          />
        </View>

        {/* Description */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Description (Optional)</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter Stock Description"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        {/* Add Variants */}
        <TouchableOpacity style={styles.addVariantsButton}>
          <Plus size={20} color="#0A1FDA" />
          <Text style={styles.addVariantsText}>Add Variants(color, size, weight)</Text>
        </TouchableOpacity>

        {/* Initial Quantity */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Initial Quantity</Text>
          <TouchableOpacity style={styles.selectInput}>
            <Text style={styles.selectText}>{quantity}</Text>
            <ChevronDown size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Price per Item */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Price per Item</Text>
          <View style={styles.priceInputContainer}>
            <Text style={styles.currencyPrefix}>KES</Text>
            <TextInput
              style={styles.priceInput}
              placeholder="1,500"
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
            />
          </View>
        </View>
      </ScrollView>

      {/* Add Stock Button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.addStockButton} onPress={handleAddStock}>
          <Text style={styles.addStockButtonText}>Add Stock</Text>
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
  content: {
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
  textArea: {
    minHeight: 100,
  },
  addVariantsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  addVariantsText: {
    fontSize: 16,
    color: '#0A1FDA',
    marginLeft: 8,
    fontWeight: '500',
  },
  selectInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  selectText: {
    fontSize: 16,
    color: '#000',
  },
  priceInputContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  currencyPrefix: {
    fontSize: 16,
    color: '#6B7280',
    paddingLeft: 16,
    fontWeight: '500',
  },
  priceInput: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  bottomSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  addStockButton: {
    backgroundColor: '#0A1FDA',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  addStockButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});