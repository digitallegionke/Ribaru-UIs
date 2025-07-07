import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

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

  const mono = Platform.select({ ios: 'Menlo', android: 'monospace', default: 'monospace' });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>ribaru</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <TouchableOpacity style={styles.notificationButton}>
            <MaterialIcons name="notifications" size={24} color="#000" />
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
          <Text style={styles.welcomeTitle}>Hey Kevin</Text>
          <Text style={styles.welcomeSubtitle}>Welcome Back</Text>
        </View>
      </View>

      {/* Stats Grid */}
      <View style={styles.statsContainer}>
        {/* Today's Sales - Large Card */}
        <View style={styles.statsCardBig}>
          <Text style={[styles.statsLabel, { fontFamily: mono }]}>TODAY'S SALES</Text>
          <Text style={[styles.todaysSalesAmount, { color: '#0A1FDA', fontFamily: mono }]}>KES 16,788</Text>
          <View style={styles.statsGridBig}>
            <View style={styles.statsCellBig}>
              <Text style={[styles.statsLabel, { fontFamily: mono }]}>TOTAL STOCK VALUE</Text>
              <Text style={[styles.statsValueBig, { fontFamily: mono }]}>KES 45,850</Text>
            </View>
            <View style={styles.statsCellBig}>
              <Text style={[styles.statsLabel, { fontFamily: mono }]}>TOTAL ITEMS IN STOCK</Text>
              <Text style={[styles.statsValueBig, { fontFamily: mono }]}>150</Text>
            </View>
            <View style={styles.statsCellBig}>
              <Text style={[styles.statsLabel, { fontFamily: mono }]}>LOW STOCK ITEMS</Text>
              <Text style={[styles.statsValueBig, { color: '#DC2626', fontFamily: mono }]}>5</Text>
            </View>
            <View style={styles.statsCellBig}>
              <Text style={[styles.statsLabel, { fontFamily: mono }]}>YOUR CUSTOMERS</Text>
              <Text style={[styles.statsValueBig, { fontFamily: mono }]}>58</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Recent Sales */}
      <View style={{ marginTop: 32, width: '100%', paddingHorizontal: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>Recent Sales</Text>
        {recentSales.map(sale => (
          <View key={sale.id} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', borderRadius: 12, padding: 16, marginBottom: 8 }}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>{sale.product}</Text>
              <Text style={{ color: '#6B7280', fontSize: 12 }}>{sale.date}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', color: '#0A1FDA' }}>KES {sale.amount.toLocaleString()}</Text>
          </View>
        ))}
      </View>

      {/* Low Stock Items */}
      <View style={{ marginTop: 24, width: '100%', paddingHorizontal: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 12 }}>Low Stock Items</Text>
        {lowStockItems.map(item => (
          <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FEF3C7', borderRadius: 12, padding: 16, marginBottom: 8 }}>
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
            <Text style={{ fontWeight: 'bold', color: '#F59E0B' }}>Qty: {item.quantity}</Text>
          </View>
        ))}
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('AddSale')}
        >
          <Text style={[styles.primaryButtonText, { fontFamily: mono }]}>Add a Sale</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('AddStock')}
        >
          <Text style={[styles.secondaryButtonText, { fontFamily: mono }]}>Add Stock</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A1FDA',
  },
  notificationButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationBadge: {
    width: 8,
    height: 8,
    backgroundColor: '#DC2626',
    borderRadius: 4,
    position: 'absolute',
    top: 8,
    right: 8,
  },
  welcomeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  welcomeText: {
    flex: 1,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
  },
  avatarCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E9EBFF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginLeft: 8,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  statsContainer: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  statsCardBig: {
    backgroundColor: '#F6F7FF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  statsLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
    marginBottom: 8,
  },
  todaysSalesAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#0A1FDA',
  },
  statsGridBig: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#E5E7EB',
  },
  statsCellBig: {
    width: '50%',
    padding: 16,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  statsValueBig: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000',
    marginTop: 4,
  },
  actionButtons: {
    paddingHorizontal: 24,
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#0A1FDA',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0A1FDA',
  },
  secondaryButtonText: {
    color: '#0A1FDA',
    fontSize: 16,
    fontWeight: '600',
  },
});