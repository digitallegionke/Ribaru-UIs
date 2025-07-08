import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text, Button, Card } from '../components';
import { COLORS, SPACING, TYPOGRAPHY, SHADOWS, BORDER_RADIUS } from '../utils/constants';

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
        return COLORS.successLight;
      case 'LOW STOCK':
        return COLORS.warningLight;
      case 'OUT OF STOCK':
        return COLORS.errorLight;
      default:
        return COLORS.gray[100];
    }
  };

  const getStatusTextColor = (status: string) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={{ paddingBottom: SPACING['4xl'] }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color={COLORS.gray[700]} />
          </TouchableOpacity>
          <Text variant="h2" weight="bold" color="primary" style={styles.headerTitle}>Stock</Text>
          <TouchableOpacity>
            <MaterialIcons name="menu" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <Card elevation="sm" padding="lg" style={styles.statsCardLarge}>
            <View style={styles.statsCardHeaderRow}>
              <Text variant="label" color="gray.500">TOTAL ITEMS</Text>
              <MaterialIcons name="north-east" size={18} color={COLORS.gray[400]} />
            </View>
            <Text variant="display" color="primary" weight="bold" style={styles.statsValueLarge}>150</Text>
          </Card>
          
          <View style={styles.statsRowSmall}>
            <Card elevation="sm" padding="md" style={styles.statsCardSmall}>
              <View style={styles.statsCardHeaderRow}>
                <Text variant="label" color="gray.500">LOW STOCK</Text>
                <MaterialIcons name="north-east" size={16} color={COLORS.gray[400]} />
              </View>
              <Text variant="h2" color="warning" weight="bold" style={styles.statsValueSmall}>12</Text>
            </Card>
            
            <Card elevation="sm" padding="md" style={styles.statsCardSmall}>
              <View style={styles.statsCardHeaderRow}>
                <Text variant="label" color="gray.500">OUT OF STOCK</Text>
                <MaterialIcons name="north-east" size={16} color={COLORS.gray[400]} />
              </View>
              <Text variant="h2" color="error" weight="bold" style={styles.statsValueSmall}>5</Text>
            </Card>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <Button
            title="Add Stock"
            onPress={() => navigation.navigate('AddStock')}
            variant="primary"
            size="lg"
            style={styles.addStockButton}
          />
          <Button
            title="Search with Barcode"
            onPress={() => {}}
            variant="outline"
            size="lg"
            style={styles.searchBarcodeButton}
          />
        </View>

        {/* Search Section */}
        <View style={styles.searchSection}>
          <Text variant="label" color="primary" style={styles.sectionLabel}>RECENT SALES</Text>
          
          <View style={styles.searchBarContainer}>
            <MaterialIcons name="search" size={20} color={COLORS.gray[400]} style={{ marginLeft: SPACING.sm }} />
            <TextInput
              style={styles.searchBarInput}
              placeholder="Search stock"
              placeholderTextColor={COLORS.gray[400]}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Product List */}
        <View style={styles.productListContainer}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(item => (
              <Card key={item.id} elevation="sm" padding="lg" style={styles.productRow}>
                <View style={styles.productInfo}>
                  <Text variant="body1" weight="medium" color="primary" style={styles.productName}>
                    {item.name}
                  </Text>
                  <Text variant="body2" color="gray.500">
                    <Text variant="body2" weight="semiBold" color="primary">{item.quantity}</Text> Items
                  </Text>
                </View>
                <View style={[styles.statusPill, { backgroundColor: getStatusColor(item.status) }]}>
                  <Text variant="caption" weight="medium" style={{ ...styles.statusPillText, color: getStatusTextColor(item.status) }}>
                    {item.status}
                  </Text>
                </View>
                <MaterialIcons name="chevron-right" size={20} color={COLORS.gray[400]} />
              </Card>
            ))
          ) : (
            <Text variant="body1" color="gray.500" style={styles.emptyText}>No items found.</Text>
          )}
        </View>
      </ScrollView>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.xl,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'left',
    marginLeft: SPACING.sm,
  },
  statsContainer: {
    paddingHorizontal: SPACING.xl,
    marginBottom: SPACING['3xl'],
  },
  statsCardLarge: {
    marginBottom: SPACING.xl,
    minHeight: 120,
  },
  statsCardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  statsValueLarge: {
    marginTop: SPACING.sm,
  },
  statsRowSmall: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  statsCardSmall: {
    flex: 1,
    minHeight: 100,
  },
  statsValueSmall: {
    marginTop: SPACING.xs,
  },
  buttonContainer: {
    paddingHorizontal: SPACING.xl,
    gap: SPACING.md,
    marginBottom: SPACING['3xl'],
  },
  addStockButton: {
    marginBottom: 0,
  },
  searchBarcodeButton: {
    marginBottom: 0,
  },
  searchSection: {
    paddingHorizontal: SPACING.xl,
    marginBottom: SPACING.xl,
  },
  sectionLabel: {
    marginBottom: SPACING.md,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background.card,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.gray[200],
    height: 48,
    ...SHADOWS.sm,
  },
  searchBarInput: {
    ...TYPOGRAPHY.body1,
    color: COLORS.gray[700],
    marginLeft: SPACING.sm,
    paddingRight: SPACING.lg,
    fontWeight: '500',
  },
  productListContainer: {
    paddingHorizontal: SPACING.xl,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    marginBottom: SPACING.xs,
  },
  statusPill: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.sm,
    marginRight: SPACING.md,
  },
  statusPillText: {
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: SPACING.xl,
  },
});