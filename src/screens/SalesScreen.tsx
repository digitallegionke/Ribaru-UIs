import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { ArrowLeft, Search, Plus } from 'lucide-react-native';
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

  const renderSale = ({ item }: { item: Sale }) => (
    <TouchableOpacity style={styles.saleItem}>
      <View>
        <Text style={styles.saleProduct}>{item.product}</Text>
        <Text style={styles.saleMeta}>
          {item.quantity} Items • {item.total}
        </Text>
        <Text style={styles.saleDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sales</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Stats Card */}
      <View style={styles.statsCard}>
        <View style={styles.todaysSales}>
          <Text style={styles.statsLabel}>TODAY'S SALES</Text>
          <Text style={styles.todaysSalesAmount}>
            <Text style={styles.currency}>KES </Text>16,788
          </Text>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statsItem}>
            <Text style={styles.statsLabel}>TOTAL SALES</Text>
            <Text style={styles.statsValue}>
              <Text style={styles.currency}>KES </Text>45,850
            </Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={styles.statsLabel}>TOTAL ITEMS SOLD</Text>
            <Text style={styles.statsValue}>150</Text>
          </View>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color="#0A1FDA" />
          <Text style={styles.searchPlaceholder}>Search sales...</Text>
        </View>
      </View>

      {/* Recent Sales */}
      <View style={styles.salesSection}>
        <Text style={styles.sectionTitle}>RECENT SALES</Text>
        <FlatList
          data={recentSales}
          renderItem={renderSale}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddSale')}
      >
        <Plus size={20} color="white" />
        <Text style={styles.floatingButtonText}>Add Sale</Text>
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
  saleItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  saleProduct: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  saleMeta: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  saleDate: {
    fontSize: 12,
    color: '#9CA3AF',
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
  floatingButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
  },
});