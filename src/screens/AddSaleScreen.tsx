import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text } from '../components';
import { COLORS } from '../utils/constants';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const mockItems = [
  { name: 'Granola', price: 1500 },
  { name: 'Trail Mix', price: 1200 },
  { name: 'Curry Paste', price: 800 },
];

export function AddSaleScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [selectedItem, setSelectedItem] = useState(mockItems[0]);
  const [quantity, setQuantity] = useState('1');
  const [showItemList, setShowItemList] = useState(false);

  const handleAddToCart = () => {
    if (selectedItem && quantity) {
      const amount = parseInt(quantity) * selectedItem.price;
      navigation.navigate('Checkout', { amount });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
          <Text variant="h2" weight="bold" color="primary" style={styles.headerTitle}>Add Sale</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text variant="label" color="primary" style={styles.label}>Select Item</Text>
            <TouchableOpacity style={styles.selectButton} onPress={() => setShowItemList(!showItemList)}>
              <Text variant="body1" color="gray.500" style={styles.selectButtonText}>{selectedItem.name}</Text>
              <MaterialIcons name="expand-more" size={20} color={COLORS.primary} />
            </TouchableOpacity>
            {showItemList && (
              <View style={styles.dropdownList}>
                {mockItems.map(item => (
                  <TouchableOpacity key={item.name} style={styles.dropdownItem} onPress={() => { setSelectedItem(item); setShowItemList(false); }}>
                    <Text variant="body1" style={styles.dropdownItemText}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <View style={styles.formGroup}>
            <Text variant="label" color="primary" style={styles.label}>Quantity</Text>
            <TextInput
              style={styles.input}
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
              placeholder="1"
            />
          </View>

          <View style={styles.formGroup}>
            <Text variant="label" color="primary" style={styles.label}>Price per Item</Text>
            <View style={styles.priceDisplay}>
              <Text variant="body1" weight="medium" style={styles.priceText}>KES {selectedItem.price.toLocaleString()}</Text>
            </View>
          </View>
        </View>

        {/* Add to Cart Button */}
        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={[styles.addToCartButton, !selectedItem && styles.disabledButton]}
            onPress={handleAddToCart}
            disabled={!selectedItem}
          >
            <Text variant="button" weight="semiBold" style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
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
    color: COLORS.primary,
    fontWeight: '500',
    marginBottom: 8,
  },
  selectButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.gray[200],
  },
  selectButtonText: {
    fontSize: 16,
    color: COLORS.gray[500],
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.gray[200],
  },
  priceDisplay: {
    backgroundColor: COLORS.background.secondary,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  priceText: {
    fontSize: 16,
    color: COLORS.gray[900],
    fontWeight: '500',
  },
  bottomSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  addToCartButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: COLORS.gray[400],
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
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
    color: COLORS.gray[900],
  },
});