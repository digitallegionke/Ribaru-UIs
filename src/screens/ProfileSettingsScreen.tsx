import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function ProfileSettingsScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile Settings</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.content}>
        <View style={styles.avatarRow}>
          <View style={styles.avatarCircle}>
            <MaterialIcons name="person" size={48} color="#fff" />
          </View>
          <View style={{ marginLeft: 16 }}>
            <Text style={styles.name}>Jane Doe</Text>
            <Text style={styles.email}>jane.doe@ribaru.com</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Phone</Text>
        <Text style={styles.value}>+254 700 123456</Text>
        <Text style={styles.sectionTitle}>Role</Text>
        <Text style={styles.value}>Manager</Text>
      </View>
      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('MockLogin' as never)}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
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
  avatarRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  avatarCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#0A1FDA', alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: 20, fontWeight: 'bold', color: '#111827' },
  email: { fontSize: 14, color: '#6B7280', marginTop: 2 },
  sectionTitle: { fontSize: 14, color: '#0A1FDA', fontWeight: '500', marginTop: 16 },
  value: { fontSize: 16, color: '#111827', marginTop: 4 },
  signOutButton: {
    backgroundColor: '#F87171',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 32,
    marginHorizontal: 24,
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 