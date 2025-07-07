import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text } from '../components';
import { COLORS } from '../utils/constants';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function StockScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock product data
  const products = [
    { id: '1', name: 'Granola', quantity: 2, status: 'LOW STOCK', image: require('../../assets/icon.png') },
    { id: '2', name: 'Trail Mix', quantity: 0, status: 'OUT OF STOCK', image: require('../../assets/icon.png') },
    { id: '3', name: 'Curry Paste', quantity: 7, status: 'IN STOCK', image: require('../../assets/icon.png') },
    { id: '4', name: 'Oats', quantity: 15, status: 'IN STOCK', image: require('../../assets/icon.png') },
    { id: '5', name: 'Honey', quantity: 1, status: 'LOW STOCK', image: require('../../assets/icon.png') },
    { id: '6', name: 'Almonds', quantity: 0, status: 'OUT OF STOCK', image: require('../../assets/icon.png') },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'IN STOCK':
        return COLORS.success;
      case 'LOW STOCK':
        return COLORS.warning;
      case 'OUT OF STOCK':
        return COLORS.error;
      default:
        return COLORS.gray[500];
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.stockItem}
      onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
      activeOpacity={0.85}
    >
      <View style={styles.stockItemRow}>
        <Image source={item.image} style={styles.productImage} />
        <View style={styles.stockItemInfo}>
          <Text variant="body1" weight="semiBold" style={styles.stockItemName}>{item.name}</Text>
          <View style={styles.stockItemMeta}>
            <Text variant="caption" style={styles.stockItemQuantity}>Qty: {item.quantity}</Text>
            <Text variant="caption" color={getStatusColor(item.status)} style={styles.stockItemStatus}>{item.status}</Text>
          </View>
        </View>
        <MaterialIcons name="chevron-right" size={24} color={COLORS.gray[400]} />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text variant="h2" weight="bold" style={styles.headerTitle}>Stock</Text>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={28} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsCardBig}>
        <View style={styles.statsRowBig}>
          <View style={styles.statsCellBig}>
            <Text variant="label" color="gray.500">TOTAL ITEMS</Text>
            <Text variant="h3" weight="semiBold" style={styles.statsValueBig}>150</Text>
          </View>
          <View style={styles.statsCellBig}>
            <Text variant="label" color="gray.500">LOW STOCK ITEMS</Text>
            <Text variant="h3" weight="semiBold" color="error" style={styles.statsValueBig}>12</Text>
          </View>
          <View style={styles.statsCellBig}>
            <Text variant="label" color="gray.500">OUT OF STOCK</Text>
            <Text variant="h3" weight="semiBold" color="error" style={styles.statsValueBig}>5</Text>
          </View>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchSection}>
        <Text variant="label" color="primary" style={styles.searchLabel}>Search Items</Text>
        <View style={styles.searchInputContainer}>
          <MaterialIcons name="search" size={20} color={COLORS.primary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={COLORS.gray[400]}
          />
        </View>
      </View>

      {/* Stock List */}
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.stockList}
        ListEmptyComponent={<Text variant="body1" color="gray.500" style={{ textAlign: 'center', marginTop: 32 }}>No items found.</Text>}
        showsVerticalScrollIndicator={false}
      />

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('AddStock')}>
          <Text variant="button" weight="semiBold" style={styles.primaryButtonText}>Add Stock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={() => {/* Search with Barcode */}}>
          <Text variant="button" weight="semiBold" style={styles.secondaryButtonText}>Search with Barcode</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  statsCardBig: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  statsRowBig: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statsCellBig: {
    flex: 1,
    alignItems: 'center',
  },
  statsValueBig: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.primary,
    marginTop: 4,
  },
  searchSection: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  searchLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background.secondary,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: COLORS.gray[900],
  },
  stockList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  stockItem: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  stockItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  productImage: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginRight: 16,
    backgroundColor: COLORS.background.secondary,
  },
  stockItemInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  stockItemName: {
    fontSize: 16,
    color: COLORS.gray[900],
    marginBottom: 4,
  },
  stockItemMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  stockItemQuantity: {
    fontSize: 13,
    color: COLORS.gray[600],
    marginRight: 12,
  },
  stockItemStatus: {
    fontSize: 13,
    fontWeight: '600',
  },
  actionButtons: {
    paddingHorizontal: 24,
    gap: 16,
    marginBottom: 16,
    marginTop: 8,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
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
    backgroundColor: COLORS.background.secondary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.primary,
    marginTop: 8,
  },
  secondaryButtonText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});