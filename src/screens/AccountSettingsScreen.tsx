import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function AccountSettingsScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Settings</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Email</Text>
        <Text style={styles.value}>user@ribaru.com</Text>
        <Text style={styles.sectionTitle}>Password</Text>
        <Text style={styles.value}>********</Text>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <Text style={styles.value}>Enabled</Text>
        <Text style={styles.sectionTitle}>Language</Text>
        <Text style={styles.value}>English (UK)</Text>
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