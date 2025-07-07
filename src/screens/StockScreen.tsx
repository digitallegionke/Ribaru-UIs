import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text } from '../components';
import { COLORS } from '../utils/constants';

export function StockScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock product data
  const products = [
    { id: '1', name: 'Indian style curry paste', quantity: 45, status: 'IN STOCK' },
    { id: '2', name: 'Granola', quantity: 0, status: 'OUT OF STOCK' },
    { id: '3', name: 'Trail Mix', quantity: 23, status: 'LOW STOCK' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'IN STOCK':
        return '#D1FADF'; // green bg
      case 'LOW STOCK':
        return '#FEF3C7'; // yellow bg
      case 'OUT OF STOCK':
        return '#FEE2E2'; // red bg
      default:
        return '#E5E7EB';
    }
  };
  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'IN STOCK':
        return '#039855'; // green text
      case 'LOW STOCK':
        return '#B54708'; // yellow text
      case 'OUT OF STOCK':
        return '#D92D20'; // red text
      default:
        return '#6B7280';
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Stock</Text>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={28} color="#3B5BFE" />
        </TouchableOpacity>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsSection}>
        <View style={styles.statsCardLarge}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Text style={styles.statsLabel}>TOTAL ITEMS</Text>
            <MaterialIcons name="north-east" size={15} color="#C7C9DF" />
          </View>
          <Text style={styles.statsValueLarge}>150</Text>
        </View>
        <View style={styles.statsRowSmall}>
          <View style={styles.statsCardSmall}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Text style={styles.statsLabel}>LOW STOCK ITEMS</Text>
              <MaterialIcons name="north-east" size={18} color="#B0B3C7" />
            </View>
            <Text style={styles.statsValueSmall}>12</Text>
          </View>
          <View style={styles.statsCardSmall}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Text style={styles.statsLabel}>LOW STOCK ITEMS</Text>
              <MaterialIcons name="north-east" size={18} color="#B0B3C7" />
            </View>
            <Text style={{...styles.statsValueSmall, color: '#D92D20'}}>5</Text>
          </View>
        </View>
      </View>

      {/* Add Stock Button */}
      <TouchableOpacity style={styles.addStockButton} onPress={() => navigation.navigate('AddStock')}>
        <Text style={styles.addStockButtonText}>Add Stock</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchBarcodeButton}>
        <Text style={styles.searchBarcodeButtonText}>Search with Barcode</Text>
      </TouchableOpacity>

      {/* Recent Sales */}
      <Text style={styles.recentSalesLabel}>RECENT SALES</Text>
      <View style={styles.searchBarContainer}>
        <MaterialIcons name="search" size={22} color="#B0B3C7" style={{ marginLeft: 8 }} />
        <TextInput
          style={styles.searchBarInput}
          placeholder="Search stock"
          placeholderTextColor="#B0B3C7"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <View style={styles.productRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productQuantity}><Text style={styles.productQuantityNumber}>{item.quantity}</Text> Items</Text>
            </View>
            <View style={[styles.statusPill, { backgroundColor: getStatusColor(item.status) }]}> 
              <Text style={{...styles.statusPillText, color: getStatusTextColor(item.status)}}>{item.status}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={22} color="#B0B3C7" />
          </View>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.productList}
        ListEmptyComponent={<Text style={styles.emptyText}>No items found.</Text>}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 18,
    backgroundColor: 'transparent',
  },
  headerTitle: {
    fontFamily: 'GeistMono',
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    flex: 1,
    textAlign: 'left',
    marginLeft: 8,
  },
  statsSection: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  statsCardLarge: {
    backgroundColor: '#E9EAFB',
    borderRadius: 22,
    paddingVertical: 38,
    paddingHorizontal: 28,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: '#E0E2F1',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    minWidth: 0,
  },
  statsCardSmall: {
    backgroundColor: '#E9EAFB',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E0E2F1',
  },
  statsRowSmall: {
    flexDirection: 'row',
    gap: 0,
  },
  statsLabel: {
    fontFamily: 'GeistMono',
    fontSize: 11,
    color: '#7C7F99',
    fontWeight: '400',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  statsValueLarge: {
    fontFamily: 'GeistMono',
    fontSize: 38,
    color: '#000',
    fontWeight: '700',
    marginTop: 10,
    textShadowColor: 'rgba(0,0,0,0.04)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
    textAlign: 'left',
  },
  statsValueSmall: {
    fontFamily: 'GeistMono',
    fontSize: 22,
    color: '#000',
    fontWeight: '700',
    marginTop: 8,
    textAlign: 'left',
  },
  addStockButton: {
    backgroundColor: '#3B5BFE',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  addStockButtonText: {
    fontFamily: 'GeistMono',
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
  },
  searchBarcodeButton: {
    backgroundColor: '#E9EAFB',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#3B5BFE',
  },
  searchBarcodeButtonText: {
    fontFamily: 'GeistMono',
    color: '#3B5BFE',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
  },
  recentSalesLabel: {
    fontFamily: 'GeistMono',
    fontSize: 12,
    color: '#000',
    fontWeight: '700',
    marginLeft: 18,
    marginBottom: 8,
    marginTop: 8,
    letterSpacing: 1,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E0E2F1',
    height: 48,
  },
  searchBarInput: {
    flex: 1,
    fontFamily: 'GeistMono',
    fontSize: 14,
    color: '#000',
    marginLeft: 8,
  },
  productList: {
    paddingHorizontal: 8,
    paddingBottom: 24,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E2F1',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  productName: {
    fontFamily: 'GeistMono',
    fontSize: 14,
    color: '#000',
    fontWeight: '700',
    marginBottom: 2,
  },
  productQuantity: {
    fontFamily: 'GeistMono',
    fontSize: 11,
    color: '#7C7F99',
    fontWeight: '500',
  },
  productQuantityNumber: {
    fontFamily: 'GeistMono',
    fontSize: 11,
    color: '#7C7F99',
    fontWeight: '700',
  },
  statusPill: {
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    minWidth: 80,
  },
  statusPillText: {
    fontFamily: 'GeistMono',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  emptyText: {
    fontFamily: 'GeistMono',
    color: '#7C7F99',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 32,
  },
});