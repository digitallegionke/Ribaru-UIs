import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function POSSetupScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>POS Setup</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Device Name</Text>
        <Text style={styles.value}>Ribaru POS #1</Text>
        <Text style={styles.sectionTitle}>Printer Status</Text>
        <Text style={[styles.value, { color: '#10B981' }]}>Connected</Text>
        <Text style={styles.sectionTitle}>Payment Integrations</Text>
        <Text style={styles.value}>M-Pesa, Card Reader</Text>
        <Text style={styles.sectionTitle}>Last Sync</Text>
        <Text style={styles.value}>Today, 10:45 AM</Text>
        <Text style={styles.sectionTitle}>Software Version</Text>
        <Text style={styles.value}>v1.2.3</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
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
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#000' },
  content: { flex: 1, padding: 24 },
  placeholder: { fontSize: 16, color: '#6B7280' },
  sectionTitle: { fontSize: 14, color: '#0A1FDA', fontWeight: '500', marginTop: 16 },
  value: { fontSize: 16, color: '#111827', marginTop: 4 },
}); 