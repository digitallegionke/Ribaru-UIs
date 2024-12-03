import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, SafeAreaView } from 'react-native';
import { Bell, Home, ShoppingCart, Package, Settings, ChevronRight, Search } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Sales: undefined;
  Stocks: undefined;
  Settings: undefined;
  AddStock: undefined;
  SearchBarcode: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface SaleItemProps {
  title: string;
  items: number;
  amount: string;
}

const SaleItem: React.FC<SaleItemProps> = ({ title, items, amount }) => (
  <TouchableOpacity style={styles.saleItem}>
    <View>
      <Text style={styles.saleItemTitle}>{title}</Text>
      <Text style={styles.saleItemSubtitle}>{items} Items</Text>
    </View>

    <View style={styles.saleItemRight}>
      <View style={styles.saleItemAmount}>
        <Text style={styles.currency}>KES</Text>
        <Text style={styles.saleItemValue}>{amount}</Text>
      </View>
      <ChevronRight size={16} color="#5C5C5C" />
    </View>
  </TouchableOpacity>
);

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.notificationButton}>
          <Bell size={20} color="#000" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Hey Kevin</Text>
        <Text style={styles.welcomeSubtitle}>Welcome Back</Text>
      </View>

      <View style={styles.statsCard}>
        <View style={styles.statsHeader}>
          <Text style={styles.statsLabel}>TODAY'S SALES</Text>
          <Text style={styles.currency}>KES</Text>
          <Text style={styles.amount}>16,788</Text>
        </View>

        <View style={styles.statsGrid}>
          <View style={styles.statsItem}>
            <Text style={styles.statsItemLabel}>SALES THIS WEEK</Text>
            <View style={styles.statsItemAmount}>
              <Text style={styles.currency}>KES</Text>
              <Text style={styles.statsItemValue}>45,850</Text>
            </View>
          </View>

          <View style={styles.statsItem}>
            <Text style={styles.statsItemLabel}>TOTAL ITEMS SOLD</Text>
            <Text style={styles.statsItemValue}>150</Text>
          </View>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('AddStock')}
        >
          <Text style={styles.primaryButtonText}>Add Stock</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('SearchBarcode')}
        >
          <Text style={styles.secondaryButtonText}>Search with Barcode</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.salesSection}>
        <Text style={styles.sectionTitle}>Today's Sales</Text>
        
        <View style={styles.searchContainer}>
          <Search size={20} color="#0A1BDA" />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search stock"
            placeholderTextColor="rgba(0,0,0,0.4)"
          />
        </View>

        <ScrollView style={styles.salesList}>
          <SaleItem 
            title="Indian style curry paste"
            items={3}
            amount="2,400.00"
          />
          <SaleItem
            title="Granola" 
            items={8}
            amount="8,500.00"
          />
          <SaleItem
            title="Trail Mix"
            items={8} 
            amount="1,800.00"
          />
        </ScrollView>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Home size={22} color="#0A1BDA" />
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Sales')}
        >
          <ShoppingCart size={22} color="#5C5C5C" />
          <Text style={styles.navText}>Sales</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Stocks')}
        >
          <Package size={22} color="#5C5C5C" />
          <Text style={styles.navText}>Stocks</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Settings')}
        >
          <Settings size={22} color="#5C5C5C" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EBFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 10,
    paddingBottom: 20,
  },
  logo: {
    width: 88,
    height: 30,
  },
  notificationButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 31,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  notificationBadge: {
    width: 7,
    height: 7,
    backgroundColor: '#C80000',
    borderRadius: 3.5,
    position: 'absolute',
    top: 9,
    right: 9,
  },
  welcomeSection: {
    paddingHorizontal: 22,
    marginBottom: 36,
  },
  welcomeTitle: {
    fontSize: 29,
    fontFamily: 'AlbertSans-Medium',
    marginBottom: 3,
    letterSpacing: -0.4,
  },
  welcomeSubtitle: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    opacity: 0.5,
  },
  statsCard: {
    backgroundColor: '#0A1BDA',
    marginHorizontal: 22,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  statsHeader: {
    marginBottom: 24,
  },
  statsLabel: {
    color: '#fff',
    opacity: 0.7,
    fontSize: 12,
    fontFamily: 'AlbertSans-Medium',
    marginBottom: 4,
  },
  currency: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    opacity: 0.7,
  },
  amount: {
    color: '#fff',
    fontSize: 32,
    fontFamily: 'AlbertSans-Medium',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  statsItem: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 12,
    borderRadius: 12,
  },
  statsItemLabel: {
    color: '#fff',
    opacity: 0.7,
    fontSize: 12,
    fontFamily: 'AlbertSans-Medium',
    marginBottom: 4,
  },
  statsItemAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statsItemValue: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'AlbertSans-Medium',
  },
  actionButtons: {
    paddingHorizontal: 22,
    marginBottom: 32,
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#0A1BDA',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  secondaryButtonText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
  },
  salesSection: {
    flex: 1,
    paddingHorizontal: 22,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'AlbertSans-Medium',
    marginBottom: 16,
  },
  searchContainer: {
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    fontFamily: 'AlbertSans-Regular',
  },
  salesList: {
    flex: 1,
  },
  saleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 72,
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  saleItemTitle: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    marginBottom: 4,
  },
  saleItemSubtitle: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    opacity: 0.5,
  },
  saleItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  saleItemAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  saleItemValue: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
  },
  bottomNav: {
    height: 80,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
  },
  navText: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Medium',
    color: '#5C5C5C',
  },
  activeNavText: {
    color: '#0A1BDA',
  },
});
