import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function StockScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Stock</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.row}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>150</Text>
            <Text style={styles.statLabel}>TOTAL STOCK</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>LOW STOCK</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>OUT STOCK</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Search with QR Code</Text>
      </TouchableOpacity>

      <View style={styles.searchResults}>
        <Text style={styles.searchTitle}>Recent Sales</Text>
        {/* Add your list of recent sales here */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  statsContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statBox: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  primaryButton: {
    backgroundColor: '#1D4ED8',
    padding: 16,
    borderRadius: 8,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  searchResults: {
    padding: 20,
  },
  searchTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 10,
  },
});

