import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../components';
import { COLORS } from '../utils/constants';

export function ProfileSettingsScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <Text variant="h2" weight="bold" style={styles.headerTitle}>Profile Settings</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.avatarRow}>
            <View style={styles.avatarCircle}>
              <MaterialIcons name="person" size={48} color="#fff" />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text variant="h3" weight="semiBold" style={styles.name}>Jane Doe</Text>
              <Text variant="body2" color="gray.500" style={styles.email}>jane.doe@ribaru.com</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Text variant="label" color="primary" style={styles.sectionTitle}>Phone</Text>
            <Text variant="body1" style={styles.value}>+254 700 123456</Text>
          </View>
          <View style={styles.infoRow}>
            <Text variant="label" color="primary" style={styles.sectionTitle}>Role</Text>
            <Text variant="body1" style={styles.value}>Manager</Text>
          </View>
        </View>
      </View>
      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('MockLogin' as never)}>
        <Text variant="button" weight="semiBold" style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background.primary },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
  },
  headerTitle: { fontSize: 20, fontWeight: '700', color: COLORS.primary },
  content: { flex: 1, padding: 16 },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 24,
  },
  avatarRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  avatarCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: 20, color: COLORS.gray[900] },
  email: { fontSize: 14, marginTop: 2 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 14, fontWeight: '500' },
  value: { fontSize: 16, color: COLORS.gray[900] },
  signOutButton: {
    backgroundColor: COLORS.error,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    marginHorizontal: 16,
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 