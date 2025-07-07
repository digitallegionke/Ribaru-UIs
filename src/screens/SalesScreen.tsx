import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Sale {
  id: string;
  product: string;
  quantity: number;
  total: string;
  date: string;
}

const recentSales: Sale[] = [
  {
    id: '1',
    product: 'Trail Mix',
    quantity: 3,
    total: 'KES 4,500',
    date: '2024-01-20',
  },
  {
    id: '2',
    product: 'Indian style curry paste',
    quantity: 2,
    total: 'KES 3,000',
    date: '2024-01-19',
  },
  {
    id: '3',
    product: 'Granola',
    quantity: 4,
    total: 'KES 6,000',
    date: '2024-01-18',
  },
];

export function SalesScreen() {
  const navigation = useNavigation<NavigationProp>();

  // Mock sales data
  const sales = [
    { id: '1', product: 'Granola', quantity: 3, total: 3600, date: '2024-07-08 10:30' },
    { id: '2', product: 'Trail Mix', quantity: 2, total: 1600, date: '2024-07-08 09:15' },
    { id: '3', product: 'Curry Paste', quantity: 5, total: 12000, date: '2024-07-07 16:20' },
    { id: '4', product: 'Oats', quantity: 1, total: 400, date: '2024-07-07 14:10' },
    { id: '5', product: 'Honey', quantity: 4, total: 3200, date: '2024-07-06 11:00' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#0A1FDA" />
        </TouchableOpacity>
        <Text variant="h1" weight="bold" color="primary" style={styles.headerTitle}>Sales</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Stats Card */}
      <View style={styles.statsCard}>
        <View style={styles.todaysSales}>
          <Text variant="label" color="gray.500" style={styles.statsLabel}>TODAY'S SALES</Text>
          <Text variant="h1" weight="bold" color="primary" style={styles.todaysSalesAmount}>16,788</Text>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statsItem}>
            <Text variant="label" color="gray.500" style={styles.statsLabel}>TOTAL SALES</Text>
            <Text variant="h3" weight="semiBold" color="primary" style={styles.statsValue}>45,850</Text>
          </View>
          <View style={styles.statsItem}>
            <Text variant="label" color="gray.500" style={styles.statsLabel}>TOTAL ITEMS SOLD</Text>
            <Text variant="h3" weight="semiBold" color="primary" style={styles.statsValue}>150</Text>
          </View>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <MaterialIcons name="search" size={20} color="#0A1FDA" />
          <Text variant="body2" color="gray.400" style={styles.searchPlaceholder}>Search sales...</Text>
        </View>
      </View>

      {/* Recent Sales */}
      <View style={styles.salesSection}>
        <Text variant="h3" weight="semiBold" color="primary" style={styles.sectionTitle}>RECENT SALES</Text>
        {sales.map(sale => (
          <View key={sale.id} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', borderRadius: 12, padding: 16, marginBottom: 8 }}>
            <View>
              <Text variant="body1" weight="medium">{sale.product}</Text>
              <Text variant="caption" color="gray.500">{sale.date}</Text>
              <Text variant="caption" color="gray.500">Qty: {sale.quantity}</Text>
            </View>
            <Text variant="h3" weight="bold" color="primary">KES {sale.total.toLocaleString()}</Text>
          </View>
        ))}
      </View>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddSale')}
      >
        <MaterialIcons name="add" size={24} color="#fff" />
      </TouchableOpacity>
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
  statsCard: {
    backgroundColor: 'white',
    margin: 24,
    borderRadius: 16,
    padding: 20,
  },
  todaysSales: {
    marginBottom: 20,
  },
  statsLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
    marginBottom: 8,
  },
  todaysSalesAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0A1FDA',
  },
  currency: {
    fontSize: 16,
    color: '#6B7280',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  statsItem: {
    flex: 1,
  },
  statsValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchPlaceholder: {
    marginLeft: 12,
    fontSize: 16,
    color: '#9CA3AF',
  },
  salesSection: {
    flex: 1,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 100,
    right: 24,
    backgroundColor: '#0A1FDA',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});