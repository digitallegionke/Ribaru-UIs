import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const mockProducts = ['Granola', 'Trail Mix', 'Curry Paste', 'Oats', 'Honey', 'Almonds'];
const mockSuppliers = ['Acme Foods', 'Sunrise Distributors', 'Global Traders'];

export function AddStockScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [selectedProduct, setSelectedProduct] = useState(mockProducts[0]);
  const [quantity, setQuantity] = useState('10');
  const [supplier, setSupplier] = useState(mockSuppliers[0]);
  const [showProductList, setShowProductList] = useState(false);
  const [showSupplierList, setShowSupplierList] = useState(false);

  const handleSave = () => {
    // In a real app, save the stock addition
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Stock</Text>
          <TouchableOpacity>
            <MaterialIcons name="menu" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Product Name */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Product</Text>
            <TouchableOpacity style={styles.selectButton} onPress={() => setShowProductList(!showProductList)}>
              <Text style={styles.selectButtonText}>{selectedProduct}</Text>
              <MaterialIcons name="expand-more" size={20} color="#0A1FDA" />
            </TouchableOpacity>
            {showProductList && (
              <View style={styles.dropdownList}>
                {mockProducts.map(product => (
                  <TouchableOpacity key={product} style={styles.dropdownItem} onPress={() => { setSelectedProduct(product); setShowProductList(false); }}>
                    <Text style={styles.dropdownItemText}>{product}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Quantity */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Quantity</Text>
            <TextInput
              style={styles.input}
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
              placeholder="0"
            />
          </View>

          {/* Supplier */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Supplier</Text>
            <TouchableOpacity style={styles.selectButton} onPress={() => setShowSupplierList(!showSupplierList)}>
              <Text style={styles.selectButtonText}>{supplier}</Text>
              <MaterialIcons name="expand-more" size={20} color="#0A1FDA" />
            </TouchableOpacity>
            {showSupplierList && (
              <View style={styles.dropdownList}>
                {mockSuppliers.map(sup => (
                  <TouchableOpacity key={sup} style={styles.dropdownItem} onPress={() => { setSupplier(sup); setShowSupplierList(false); }}>
                    <Text style={styles.dropdownItemText}>{sup}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </ScrollView>

        {/* Add Stock Button */}
        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.addStockButton} onPress={handleSave}>
            <Text style={styles.addStockButtonText}>Save</Text>
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
  selectButton: {
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
  selectButtonText: {
    fontSize: 16,
    color: '#000',
  },
  dropdownList: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    maxHeight: 200,
  },
  dropdownItem: {
    padding: 8,
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#000',
  },
});