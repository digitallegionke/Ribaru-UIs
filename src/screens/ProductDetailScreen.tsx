import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { ArrowLeft, Menu, Edit, MoreHorizontal, ChevronRight } from 'lucide-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

export function ProductDetailScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp>();
  const [hasChanges, setHasChanges] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          Indian style curry...
        </Text>
        <TouchableOpacity>
          <Menu size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Product Name */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionLabel}>Product Name</Text>
            <TouchableOpacity>
              <Edit size={16} color="#0A1FDA" />
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
                  <MoreHorizontal size={16} color="#9CA3AF" />
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
                  <MoreHorizontal size={16} color="#9CA3AF" />
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
                  <MoreHorizontal size={16} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
          <TouchableOpacity style={styles.detailItem}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Description</Text>
              <ChevronRight size={16} color="#9CA3AF" />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.detailItem}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Vendor, category, type, tag</Text>
              <ChevronRight size={16} color="#9CA3AF" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.saveButton, !hasChanges && styles.disabledButton]}
          disabled={!hasChanges}
        >
          <Text style={[styles.saveButtonText, !hasChanges && styles.disabledButtonText]}>
            Save
          </Text>
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
  bottomSection: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingBottom: 24,
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#0A1FDA',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#0A1FDA',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#9CA3AF',
  },
  disabledButtonText: {
    color: '#D1D5DB',
  },
});