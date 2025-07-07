import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>ribaru</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <MaterialIcons name="notifications" size={20} color="#000" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <View style={styles.welcomeText}>
          <Text style={styles.welcomeTitle}>Hey Kevin</Text>
          <Text style={styles.welcomeSubtitle}>Welcome Back</Text>
        </View>
        <View style={styles.avatar}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2' }}
            style={styles.avatarImage}
          />
        </View>
      </View>

      {/* Stats Grid */}
      <View style={styles.statsContainer}>
        {/* Today's Sales - Large Card */}
        <View style={styles.todaysSalesCard}>
          <Text style={styles.statsLabel}>TODAY'S SALES</Text>
          <Text style={styles.todaysSalesAmount}>
            <Text style={styles.currency}>KES </Text>16,788
          </Text>
        </View>

        {/* Grid of 4 smaller cards */}
        <View style={styles.statsGrid}>
          <View style={styles.statsCard}>
            <Text style={styles.statsLabel}>TOTAL STOCK VALUE</Text>
            <Text style={styles.statsValue}>
              <Text style={styles.currency}>KES </Text>45,850
            </Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsLabel}>TOTAL ITEMS IN STOCK</Text>
            <Text style={styles.statsValue}>150</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsLabel}>LOW STOCK ITEMS</Text>
            <Text style={[styles.statsValue, styles.lowStockValue]}>5</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsLabel}>YOUR CUSTOMERS</Text>
            <Text style={styles.statsValue}>58</Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('AddSale')}
        >
          <Text style={styles.primaryButtonText}>Add a Sale</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('AddStock')}
        >
          <Text style={styles.secondaryButtonText}>Add Stock</Text>
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
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  statsContainer: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  todaysSalesCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
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
  currency: {
    fontSize: 16,
    color: '#6B7280',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statsCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    width: '48%',
  },
  statsValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  lowStockValue: {
    color: '#DC2626',
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