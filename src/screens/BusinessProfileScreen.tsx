import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function BusinessProfileScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Business Profile</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Business Name</Text>
        <Text style={styles.value}>Ribaru Foods Ltd.</Text>
        <Text style={styles.sectionTitle}>Address</Text>
        <Text style={styles.value}>123 Market Street, Nairobi, Kenya</Text>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.value}>+254 712 345678</Text>
        <Text style={styles.sectionTitle}>Registration No.</Text>
        <Text style={styles.value}>C-2024-00123</Text>
        <Text style={styles.sectionTitle}>Tax ID</Text>
        <Text style={styles.value}>P123456789K</Text>
        <Text style={styles.sectionTitle}>Email</Text>
        <Text style={styles.value}>info@ribarufoods.com</Text>
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