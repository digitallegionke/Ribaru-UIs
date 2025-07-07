import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Platform,
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

  const mono = Platform.select({ ios: 'Menlo', android: 'monospace', default: 'monospace' });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { fontFamily: mono }]} numberOfLines={1}>
          {product.name}
        </Text>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={28} color="#0A1FDA" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Product Name */}
        <View style={styles.sectionBig}>
          <View style={styles.sectionHeaderBig}>
            <Text style={[styles.sectionLabelBig, { fontFamily: mono }]}>Product Name</Text>
            <TouchableOpacity>
              <MaterialIcons name="edit" size={18} color="#0A1FDA" />
              <Text style={[styles.editText, { fontFamily: mono }]}>EDIT</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.productNameBig, { fontFamily: mono }]}>{product.name}</Text>
        </View>

        {/* Inventory */}
        <View style={styles.sectionBig}>
          <Text style={[styles.sectionTitleBig, { fontFamily: mono }]}>Inventory</Text>
          <View style={styles.inventoryRowBig}>
            <View style={styles.inventoryCellBig}>
              <Text style={[styles.inventoryLabelBig, { fontFamily: mono }]}>Available</Text>
              <Text style={[styles.inventoryValueBig, { fontFamily: mono }]}>{product.quantity}</Text>
            </View>
            <View style={styles.inventoryCellBig}>
              <Text style={[styles.inventoryLabelBig, { fontFamily: mono }]}>Committed</Text>
              <Text style={[styles.inventoryValueBig, { fontFamily: mono }]}>0</Text>
            </View>
          </View>
          <Text style={[styles.lastUpdated, { fontFamily: mono }]}>Last updated Today 1:05 PM</Text>
        </View>

        {/* More Details */}
        <View style={styles.sectionBig}>
          <Text style={[styles.sectionTitleBig, { fontFamily: mono }]}>More details</Text>
          <View style={styles.detailRowBig}>
            <Text style={[styles.detailLabelBig, { fontFamily: mono }]}>Price</Text>
            <Text style={[styles.priceValueBig, { fontFamily: mono }]}>KES 336.00</Text>
          </View>
          <TouchableOpacity style={styles.detailRowBig}>
            <Text style={[styles.detailLabelBig, { fontFamily: mono }]}>Description</Text>
            <MaterialIcons name="chevron-right" size={18} color="#0A1FDA" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailRowBig}>
            <Text style={[styles.detailLabelBig, { fontFamily: mono }]}>Vendor, category, type, tag</Text>
            <MaterialIcons name="chevron-right" size={18} color="#0A1FDA" />
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
    fontSize: 20,
    fontWeight: '700',
    color: '#0A1FDA',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  sectionBig: {
    backgroundColor: '#F6F7FF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  sectionHeaderBig: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionLabelBig: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '700',
    letterSpacing: 1,
  },
  editText: {
    color: '#0A1FDA',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 4,
    letterSpacing: 1,
  },
  productNameBig: {
    fontSize: 18,
    color: '#0A1FDA',
    fontWeight: '700',
    marginTop: 8,
    letterSpacing: 1,
  },
  sectionTitleBig: {
    fontSize: 16,
    color: '#0A1FDA',
    fontWeight: '700',
    marginBottom: 16,
    letterSpacing: 1,
  },
  inventoryRowBig: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  inventoryCellBig: {
    flex: 1,
    alignItems: 'center',
  },
  inventoryLabelBig: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
    marginBottom: 4,
  },
  inventoryValueBig: {
    fontSize: 20,
    color: '#0A1FDA',
    fontWeight: '700',
    letterSpacing: 1,
  },
  detailRowBig: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailLabelBig: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  priceValueBig: {
    fontSize: 16,
    color: '#0A1FDA',
    fontWeight: '700',
    letterSpacing: 1
  },
  lastUpdated: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 8,
  }
});