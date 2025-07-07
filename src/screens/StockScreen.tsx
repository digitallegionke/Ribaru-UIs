import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
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

  const renderStockItem = ({ item }: { item: StockItem }) => (
    <TouchableOpacity
      style={styles.stockItem}
      onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
    >
      <View style={styles.stockItemContent}>
        <View style={styles.stockItemHeader}>
          <Text style={styles.stockItemName}>{item.name}</Text>
          <MaterialIcons name="chevron-right" size={24} color="#9CA3AF" />
        </View>
        <View style={styles.stockItemFooter}>
          <Text style={styles.stockItemQuantity}>Quantity: {item.quantity}</Text>
          <Text style={[styles.stockItemStatus, { color: getStatusColor(item.status) }]}>
            {item.status}
          </Text>
        </View>
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
        <Text style={styles.headerTitle}>Stock</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <View style={styles.totalItemsCard}>
          <View style={styles.statsCardHeader}>
            <Text style={styles.statsLabel}>TOTAL ITEMS</Text>
            <MaterialIcons name="chevron-right" size={16} color="#9CA3AF" />
          </View>
          <Text style={styles.totalItemsValue}>150</Text>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statsCard}>
            <View style={styles.statsCardHeader}>
              <Text style={styles.statsLabel}>LOW STOCK ITEMS</Text>
              <MaterialIcons name="chevron-right" size={16} color="#9CA3AF" />
            </View>
            <Text style={styles.statsValue}>12</Text>
          </View>
          <View style={styles.statsCard}>
            <View style={styles.statsCardHeader}>
              <Text style={styles.statsLabel}>OUT OF STOCK</Text>
              <MaterialIcons name="chevron-right" size={16} color="#9CA3AF" />
            </View>
            <Text style={styles.statsValue}>5</Text>
          </View>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchSection}>
        <Text style={styles.searchLabel}>Search Items</Text>
        <View style={styles.searchInputContainer}>
          <MaterialIcons name="search" size={20} color="#0A1FDA" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      {/* Stock List */}
      <View style={styles.stockList}>
        <FlatList
          data={stockItems}
          renderItem={renderStockItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
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
  statsContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    marginBottom: 24,
  },
  totalItemsCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  statsCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  statsLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  totalItemsValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  statsCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
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
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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
});