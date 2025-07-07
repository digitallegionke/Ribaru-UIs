import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface StockItem {
  id: string;
  name: string;
  quantity: number;
  status: 'IN STOCK' | 'LOW STOCK' | 'OUT OF STOCK';
}

const stockItems: StockItem[] = [
  {
    id: '1',
    name: 'Indian style curry paste',
    quantity: 45,
    status: 'IN STOCK',
  },
  {
    id: '2',
    name: 'Granola',
    quantity: 0,
    status: 'OUT OF STOCK',
  },
  {
    id: '3',
    name: 'Trail Mix',
    quantity: 23,
    status: 'LOW STOCK',
  },
];

export function StockScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock product data
  const products = [
    { id: '1', name: 'Granola', quantity: 2, status: 'LOW STOCK' },
    { id: '2', name: 'Trail Mix', quantity: 0, status: 'OUT OF STOCK' },
    { id: '3', name: 'Curry Paste', quantity: 7, status: 'IN STOCK' },
    { id: '4', name: 'Oats', quantity: 15, status: 'IN STOCK' },
    { id: '5', name: 'Honey', quantity: 1, status: 'LOW STOCK' },
    { id: '6', name: 'Almonds', quantity: 0, status: 'OUT OF STOCK' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'IN STOCK':
        return '#10B981';
      case 'LOW STOCK':
        return '#F59E0B';
      case 'OUT OF STOCK':
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const mono = Platform.select({ ios: 'Menlo', android: 'monospace', default: 'monospace' });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { fontFamily: mono }]}>Stock</Text>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={28} color="#0A1FDA" />
        </TouchableOpacity>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsCardBig}>
        <View style={styles.statsRowBig}>
          <View style={styles.statsCellBig}>
            <Text style={[styles.statsLabel, { fontFamily: mono }]}>TOTAL ITEMS</Text>
            <Text style={[styles.statsValueBig, { fontFamily: mono }]}>150</Text>
          </View>
          <View style={styles.statsCellBig}>
            <Text style={[styles.statsLabel, { fontFamily: mono }]}>LOW STOCK ITEMS</Text>
            <Text style={[styles.statsValueBig, { color: '#DC2626', fontFamily: mono }]}>12</Text>
          </View>
        </View>
        <View style={styles.statsRowBig}>
          <View style={styles.statsCellBig}>
            <Text style={[styles.statsLabel, { fontFamily: mono }]}>OUT OF STOCK</Text>
            <Text style={[styles.statsValueBig, { color: '#DC2626', fontFamily: mono }]}>5</Text>
          </View>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchSection}>
        <Text style={styles.searchLabel}>Search Items</Text>
        <View style={styles.searchInputContainer}>
          <MaterialIcons name="search" size={20} color="#0A1FDA" />
          <TextInput
            style={[styles.searchInput, { fontFamily: mono }]}
            placeholder="Search by name..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      {/* Stock List */}
      <View style={styles.stockList}>
        {filteredProducts.map(product => (
          <TouchableOpacity
            key={product.id}
            style={styles.stockItem}
            onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
          >
            <View style={styles.stockItemContent}>
              <View style={styles.stockItemHeader}>
                <Text style={[styles.stockItemName, { fontFamily: mono }]}>{product.name}</Text>
                <MaterialIcons name="chevron-right" size={24} color="#9CA3AF" />
              </View>
              <View style={styles.stockItemFooter}>
                <Text style={[styles.stockItemQuantity, { fontFamily: mono }]}>Quantity: {product.quantity}</Text>
                <Text style={[styles.stockItemStatus, { color: getStatusColor(product.status), fontFamily: mono }]}> 
                  {product.status}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('AddStock')}>
          <Text style={[styles.primaryButtonText, { fontFamily: mono }]}>Add Stock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={() => {/* Search with Barcode */}}>
          <Text style={[styles.secondaryButtonText, { fontFamily: mono }]}>Search with Barcode</Text>
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
  statsCardBig: {
    backgroundColor: '#F6F7FF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  statsRowBig: {
    flexDirection: 'row',
  },
  statsCellBig: {
    flex: 1,
    padding: 16,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  statsValueBig: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000',
    marginTop: 4,
  },
  statsLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  statsValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  searchSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  searchLabel: {
    fontSize: 14,
    color: '#0A1FDA',
    fontWeight: '500',
    marginBottom: 8,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F7FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#000',
  },
  stockList: {
    flex: 1,
    paddingHorizontal: 24,
  },
  stockItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  stockItemContent: {
    flex: 1,
  },
  stockItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  stockItemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
  stockItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stockItemQuantity: {
    fontSize: 14,
    color: '#6B7280',
  },
  stockItemStatus: {
    fontSize: 12,
    fontWeight: '500',
  },
  actionButtons: {
    paddingHorizontal: 24,
    gap: 16,
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: '#0A1FDA',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#F6F7FF',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0A1FDA',
    marginTop: 8,
  },
  secondaryButtonText: {
    color: '#0A1FDA',
    fontSize: 16,
    fontWeight: '600',
  },
});