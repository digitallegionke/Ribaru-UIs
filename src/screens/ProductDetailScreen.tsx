import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp as RNRouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type ProductDetailScreenProps = {
  route: RNRouteProp<RootStackParamList, 'ProductDetail'>;
};

export function ProductDetailScreen({ route }: ProductDetailScreenProps) {
  const navigation = useNavigation<NavigationProp>();
  const { productId } = route.params;

  // Mock product details for demo
  const mockProducts = {
    '1': {
      name: 'Granola',
      image: require('../../assets/icon.png'),
      price: 7.99,
      quantity: 2,
      status: 'LOW STOCK',
      description: 'Crunchy granola with honey and almonds. Perfect for breakfast or snacking.'
    },
    '2': {
      name: 'Trail Mix',
      image: require('../../assets/icon.png'),
      price: 5.49,
      quantity: 0,
      status: 'OUT OF STOCK',
      description: 'A delicious blend of nuts, seeds, and dried fruit.'
    },
    '3': {
      name: 'Curry Paste',
      image: require('../../assets/icon.png'),
      price: 3.99,
      quantity: 7,
      status: 'IN STOCK',
      description: 'Authentic curry paste for flavorful dishes.'
    },
    '4': {
      name: 'Oats',
      image: require('../../assets/icon.png'),
      price: 2.99,
      quantity: 15,
      status: 'IN STOCK',
      description: 'Whole grain oats for a healthy breakfast.'
    },
    '5': {
      name: 'Honey',
      image: require('../../assets/icon.png'),
      price: 6.25,
      quantity: 1,
      status: 'LOW STOCK',
      description: 'Pure, natural honey from local farms.'
    },
    '6': {
      name: 'Almonds',
      image: require('../../assets/icon.png'),
      price: 8.99,
      quantity: 0,
      status: 'OUT OF STOCK',
      description: 'Crunchy roasted almonds, lightly salted.'
    },
  };

  const product = mockProducts[productId] || mockProducts['1'];

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

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          Indian style curry...
        </Text>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Product Name */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionLabel}>Product Name</Text>
            <TouchableOpacity>
              <MaterialIcons name="edit" size={16} color="#0A1FDA" />
            </TouchableOpacity>
          </View>
          <Text style={styles.productName}>Indian style curr...</Text>
        </View>

        {/* Inventory */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Inventory</Text>
          
          <View style={styles.inventoryItem}>
            <Text style={styles.inventoryLabel}>On hand</Text>
          </View>
          
          <View style={styles.inventoryItem}>
            <View style={styles.inventoryRow}>
              <Text style={styles.inventoryLabel}>Available</Text>
              <View style={styles.inventoryRight}>
                <Text style={styles.inventoryValue}>7</Text>
                <TouchableOpacity>
                  <MaterialIcons name="more-horiz" size={16} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
          <View style={styles.inventoryItem}>
            <View style={styles.inventoryRow}>
              <Text style={styles.inventoryLabel}>Committed</Text>
              <View style={styles.inventoryRight}>
                <Text style={styles.inventoryValue}>0</Text>
                <TouchableOpacity>
                  <MaterialIcons name="more-horiz" size={16} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
          <Text style={styles.lastUpdated}>Last updated Today 1:05 PM</Text>
        </View>

        {/* More Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>More details</Text>
          
          <View style={styles.detailItem}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Price</Text>
              <View style={styles.detailRight}>
                <Text style={styles.priceValue}>KES 336.00</Text>
                <TouchableOpacity>
                  <MaterialIcons name="more-horiz" size={16} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
          <TouchableOpacity style={styles.detailItem}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Description</Text>
              <MaterialIcons name="chevron-right" size={16} color="#9CA3AF" />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.detailItem}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Vendor, category, type, tag</Text>
              <MaterialIcons name="chevron-right" size={16} color="#9CA3AF" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Buttons (hidden in demo/mock) */}
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
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    marginBottom: 16,
  },
  productName: {
    fontSize: 16,
    color: '#0A1FDA',
    fontWeight: '500',
  },
  inventoryItem: {
    marginBottom: 12,
  },
  inventoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inventoryLabel: {
    fontSize: 16,
    color: '#000',
  },
  inventoryRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  inventoryValue: {
    fontSize: 16,
    color: '#0A1FDA',
    fontWeight: '600',
  },
  lastUpdated: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 8,
  },
  detailItem: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 16,
    color: '#000',
  },
  detailRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  priceValue: {
    fontSize: 16,
    color: '#0A1FDA',
    fontWeight: '600',
  },
});