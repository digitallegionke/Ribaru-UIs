import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const salesData = [
  { id: '1', item: 'Indian style curry', price: 'KES 3,420' },
  { id: '2', item: 'Kimchi', price: 'KES 2,800' },
  { id: '3', item: 'Thai Mai', price: 'KES 1,950' },
  { id: '4', item: 'Indian style curry', price: 'KES 3,420' },
  { id: '5', item: 'Kimchi', price: 'KES 2,800' },
];

export function SalesScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.saleItem}>
      <Text style={styles.itemName}>{item.item}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sales</Text>
      <Text style={styles.subtitle}>Recent Sales</Text>
      <FlatList
        data={salesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
  saleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  itemName: {
    fontSize: 16,
    color: '#111827',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1D4ED8',
  },
});

