import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../components';
import { COLORS } from '../utils/constants';

export function AccountSettingsScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <Text variant="h2" weight="bold" style={styles.headerTitle}>Account Settings</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.content}>
        <View style={styles.settingsCard}>
          <View style={styles.infoRow}>
            <Text variant="label" color="primary" style={styles.sectionTitle}>Email</Text>
            <Text variant="body1" style={styles.value}>user@ribaru.com</Text>
          </View>
          <View style={styles.infoRow}>
            <Text variant="label" color="primary" style={styles.sectionTitle}>Password</Text>
            <Text variant="body1" style={styles.value}>********</Text>
          </View>
          <View style={styles.infoRow}>
            <Text variant="label" color="primary" style={styles.sectionTitle}>Notifications</Text>
            <Text variant="body1" style={styles.value}>Enabled</Text>
          </View>
          <View style={styles.infoRow}>
            <Text variant="label" color="primary" style={styles.sectionTitle}>Language</Text>
            <Text variant="body1" style={styles.value}>English (UK)</Text>
          </View>
        </View>
      </View>
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
  settingsCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 24,
  },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 14, fontWeight: '500' },
  value: { fontSize: 16, color: COLORS.gray[900] },
}); 