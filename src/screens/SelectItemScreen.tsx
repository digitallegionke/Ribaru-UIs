import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import { ArrowLeft, Search } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Product {
  id: string;
  name: string;
  priceRange: string;
  variants: number;
  soldOut: boolean;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Indian style curry paste',
    priceRange: 'KES 295-KES 1,800',
    variants: 3,
    soldOut: false,
  },
  {
    id: '2',
    name: 'Granola',
    priceRange: 'KES 295-KES 1,800',
    variants: 3,
    soldOut: false,
  },
  {
    id: '3',
    name: 'Trail Mix',
    priceRange: 'KES 295-KES 1,800',
    variants: 3,
    soldOut: true,
  },
];

export function SelectItemScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={[styles.productItem, item.soldOut && styles.soldOutItem]}
      onPress={() => !item.soldOut && navigation.goBack()}
      disabled={item.soldOut}
    >
      <View style={styles.productInfo}>
        <Text style={[styles.productName, item.soldOut && styles.soldOutText]}>
          {item.name}
        </Text>
        <Text style={[styles.productPrice, item.soldOut && styles.soldOutText]}>
          {item.priceRange}
        </Text>
        <View style={styles.productMeta}>
          <Text style={[styles.variantsText, item.soldOut && styles.soldOutText]}>
            {item.variants} variants
          </Text>
          {item.soldOut && <Text style={styles.soldOutLabel}>Sold out</Text>}
        </View>
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
        <Text style={styles.headerTitle}>Select Item</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color="#0A1FDA" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search stock"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      {/* Products List */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        style={styles.productsList}
        showsVerticalScrollIndicator={false}
      />
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
  searchContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'white',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
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
  productsList: {
    flex: 1,
    paddingHorizontal: 24,
  },
  productItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  soldOutItem: {
    backgroundColor: '#F9FAFB',
    opacity: 0.6,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#0A1FDA',
    fontWeight: '500',
    marginBottom: 4,
  },
  productMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  variantsText: {
    fontSize: 12,
    color: '#6B7280',
  },
  soldOutText: {
    color: '#9CA3AF',
  },
  soldOutLabel: {
    fontSize: 12,
    color: '#DC2626',
    fontWeight: '500',
  },
});