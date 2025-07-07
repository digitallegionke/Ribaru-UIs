import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text, Card, Button } from '../components';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../utils/constants';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Sale {
  id: string;
  product: string;
  quantity: number;
  total: number;
  date: string;
}

export function SalesScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock sales data
  const sales: Sale[] = [
    { id: '1', product: 'Granola', quantity: 3, total: 3600, date: '2024-07-08 10:30' },
    { id: '2', product: 'Trail Mix', quantity: 2, total: 1600, date: '2024-07-08 09:15' },
    { id: '3', product: 'Curry Paste', quantity: 5, total: 12000, date: '2024-07-07 16:20' },
    { id: '4', product: 'Oats', quantity: 1, total: 400, date: '2024-07-07 14:10' },
    { id: '5', product: 'Honey', quantity: 4, total: 3200, date: '2024-07-06 11:00' },
  ];

  const filteredSales = sales.filter(sale =>
    sale.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const totalSales = sales.reduce((sum, sale) => sum + sale.total, 0);
  const totalItems = sales.reduce((sum, sale) => sum + sale.quantity, 0);

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
          <Text variant="h2" weight="bold" color="primary" style={styles.headerTitle}>Sales</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Stats Card */}
        <View style={styles.statsContainer}>
          <Card elevation="md" padding="lg" style={styles.statsCard}>
            <Text variant="label" color="gray.500">TODAY'S SALES</Text>
            <Text variant="h1" color="primary" weight="bold" style={styles.todaysSalesAmount}>
              KES {totalSales.toLocaleString()}
            </Text>
            
            <View style={styles.statsGrid}>
              <View style={styles.statsItem}>
                <Text variant="label" color="gray.500">TOTAL SALES</Text>
                <Text variant="h3" weight="semiBold" color="primary" style={styles.statsValue}>
                  KES {totalSales.toLocaleString()}
                </Text>
              </View>
              <View style={styles.statsItem}>
                <Text variant="label" color="gray.500">TOTAL ITEMS SOLD</Text>
                <Text variant="h3" weight="semiBold" color="primary" style={styles.statsValue}>
                  {totalItems}
                </Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <MaterialIcons name="search" size={20} color={COLORS.gray[400]} style={{ marginLeft: SPACING.sm }} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search sales..."
              placeholderTextColor={COLORS.gray[400]}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Recent Sales */}
        <View style={styles.salesSection}>
          <Text variant="h3" weight="semiBold" color="primary" style={styles.sectionTitle}>
            Recent Sales
          </Text>
          
          <View style={styles.salesList}>
            {filteredSales.length > 0 ? (
              filteredSales.map(sale => (
                <Card key={sale.id} elevation="sm" padding="lg" style={styles.saleItem}>
                  <View style={styles.saleInfo}>
                    <Text variant="body1" weight="medium" color="primary" style={styles.productName}>
                      {sale.product}
                    </Text>
                    <Text variant="body2" color="gray.500">
                      Qty: <Text variant="body2" weight="semiBold" color="primary">{sale.quantity}</Text> • {formatDate(sale.date)}
                    </Text>
                  </View>
                  <Text variant="h3" weight="bold" color="primary">
                    KES {sale.total.toLocaleString()}
                  </Text>
                </Card>
              ))
            ) : (
              <Text variant="body1" color="gray.500" style={styles.emptyText}>
                No sales found.
              </Text>
            )}
          </View>
        </View>

        {/* Action Button */}
        <View style={styles.actionContainer}>
          <Button
            title="Add New Sale"
            onPress={() => navigation.navigate('AddSale')}
            variant="primary"
            size="lg"
          />
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
    textAlign: 'center',
  },
  statsContainer: {
    paddingHorizontal: SPACING.xl,
    marginBottom: SPACING['3xl'],
  },
  statsCard: {
    backgroundColor: COLORS.background.card,
  },
  todaysSalesAmount: {
    marginTop: SPACING.sm,
    marginBottom: SPACING.xl,
  },
  statsGrid: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: COLORS.gray[200],
  },
  statsItem: {
    flex: 1,
    padding: SPACING.lg,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray[200],
  },
  statsValue: {
    marginTop: SPACING.xs,
  },
  searchContainer: {
    paddingHorizontal: SPACING.xl,
    marginBottom: SPACING['3xl'],
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background.card,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.gray[200],
    height: 48,
    ...SHADOWS.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.gray[700],
    marginLeft: SPACING.sm,
    paddingRight: SPACING.lg,
  },
  salesSection: {
    paddingHorizontal: SPACING.xl,
    marginBottom: SPACING['3xl'],
  },
  sectionTitle: {
    marginBottom: SPACING.lg,
  },
  salesList: {
    gap: SPACING.md,
  },
  saleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  saleInfo: {
    flex: 1,
    marginRight: SPACING.lg,
  },
  productName: {
    marginBottom: SPACING.xs,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: SPACING.xl,
  },
  actionContainer: {
    paddingHorizontal: SPACING.xl,
  },
});