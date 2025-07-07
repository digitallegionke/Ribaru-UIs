import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Button, Card, Text } from '../components';
import { COLORS, SHADOWS, SPACING, TYPOGRAPHY } from '../utils/constants';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface SaleItem {
  id: string;
  product: string;
  amount: number;
  date: string;
}

interface StockItem {
  id: string;
  name: string;
  quantity: number;
}

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  // Mock data
  const recentSales = [
    { id: '1', product: 'Granola', amount: 1200, date: 'Today, 10:30 AM' },
    { id: '2', product: 'Trail Mix', amount: 800, date: 'Today, 9:15 AM' },
    { id: '3', product: 'Curry Paste', amount: 2400, date: 'Yesterday, 4:20 PM' },
  ];
  const lowStockItems = [
    { id: '1', name: 'Granola', quantity: 2 },
    { id: '2', name: 'Trail Mix', quantity: 1 },
    { id: '3', name: 'Curry Paste', quantity: 3 },
  ];


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text variant="h2" weight="bold" color="primary">ribaru</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <TouchableOpacity style={styles.notificationButton}>
              <MaterialIcons name="notifications" size={24} color={COLORS.gray[700]} />
              <View style={styles.notificationBadge} />
            </TouchableOpacity>
            <View style={styles.avatarCircle}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2' }}
                style={styles.avatarImage}
              />
            </View>
          </View>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <View style={styles.welcomeText}>
            <Text variant="h1" weight="bold">Hey Kevin</Text>
            <Text variant="body1" color="gray.500">Welcome Back</Text>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsContainer}>
          <Card elevation="md" padding="lg">
            <Text variant="label" color="gray.500">TODAY'S SALES</Text>
            <Text variant="h1" color="primary" weight="bold" style={{ marginTop: 8 }}>KES 16,788</Text>
            <View style={styles.statsGridBig}>
              <View style={styles.statsCellBig}>
                <Text variant="label" color="gray.500">TOTAL STOCK VALUE</Text>
                <Text variant="h3" weight="semiBold" style={{ marginTop: 4 }}>KES 45,850</Text>
              </View>
              <View style={styles.statsCellBig}>
                <Text variant="label" color="gray.500">TOTAL ITEMS IN STOCK</Text>
                <Text variant="h3" weight="semiBold" style={{ marginTop: 4 }}>150</Text>
              </View>
              <View style={styles.statsCellBig}>
                <Text variant="label" color="gray.500">LOW STOCK ITEMS</Text>
                <Text variant="h3" weight="semiBold" color="error" style={{ marginTop: 4 }}>5</Text>
              </View>
              <View style={styles.statsCellBig}>
                <Text variant="label" color="gray.500">YOUR CUSTOMERS</Text>
                <Text variant="h3" weight="semiBold" style={{ marginTop: 4 }}>58</Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Recent Sales */}
        <View style={styles.sectionContainer}>
          <Text variant="h3" weight="semiBold" style={{ marginBottom: 16 }}>Recent Sales</Text>
          {recentSales.map(sale => (
            <TouchableOpacity
              key={sale.id}
              onPress={() => navigation.navigate('ProductDetail', { productId: sale.id })}
              activeOpacity={0.8}
            >
              <Card elevation="sm" padding="md" style={{ marginBottom: 8 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View>
                    <Text variant="body1" weight="medium">{sale.product}</Text>
                    <Text variant="caption" color="gray.500">{sale.date}</Text>
                  </View>
                  <Text variant="body1" weight="bold" color="primary">KES {sale.amount.toLocaleString()}</Text>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </View>

        {/* Low Stock Items */}
        <View style={styles.sectionContainer}>
          <Text variant="h3" weight="semiBold" style={{ marginBottom: 16 }}>Low Stock Items</Text>
          {lowStockItems.map(item => (
            <Card key={item.id} elevation="sm" padding="md" style={{ marginBottom: 8, backgroundColor: COLORS.warningLight }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text variant="body1" weight="medium">{item.name}</Text>
                <Text variant="body1" weight="bold" color="warning">Qty: {item.quantity}</Text>
              </View>
            </Card>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Button
            title="Add a Sale"
            onPress={() => navigation.navigate('AddSale')}
            variant="primary"
            size="lg"
          />
          <Button
            title="Add Stock"
            onPress={() => navigation.navigate('AddStock')}
            variant="outline"
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.xl,
  },
  notificationButton: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.background.card,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    ...SHADOWS.sm,
  },
  notificationBadge: {
    width: 8,
    height: 8,
    backgroundColor: COLORS.error,
    borderRadius: 4,
    position: 'absolute',
    top: 8,
    right: 8,
  },
  welcomeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
    marginBottom: SPACING['3xl'],
  },
  welcomeText: {
    flex: 1,
  },
  avatarCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginLeft: SPACING.sm,
    ...SHADOWS.sm,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  statsContainer: {
    paddingHorizontal: SPACING.xl,
    marginBottom: SPACING['3xl'],
  },
  statsGridBig: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: SPACING.lg,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: COLORS.gray[200],
  },
  statsCellBig: {
    width: '50%',
    padding: SPACING.lg,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray[200],
  },
  sectionContainer: {
    marginTop: SPACING['3xl'],
    width: '100%',
    paddingHorizontal: SPACING.xl,
  },
  actionButtons: {
    paddingHorizontal: SPACING.xl,
    gap: SPACING.lg,
    marginTop: SPACING['3xl'],
  },
});