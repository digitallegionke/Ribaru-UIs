import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text } from '../components';
import { COLORS } from '../utils/constants';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function UserManagementScreen() {
  const navigation = useNavigation<NavigationProp>();

  // Mock user data for demo
  const users = [
    { id: '1', name: 'Kush Patel', role: 'Admin', status: 'Active' },
    { id: '2', name: 'Aisha Khan', role: 'Cashier', status: 'Active' },
    { id: '3', name: 'Samuel Lee', role: 'Manager', status: 'Inactive' },
    { id: '4', name: 'Priya Singh', role: 'Cashier', status: 'Active' },
    { id: '5', name: 'John Doe', role: 'Admin', status: 'Inactive' },
    { id: '6', name: 'Fatima Noor', role: 'Cashier', status: 'Active' },
    { id: '7', name: 'Carlos Mendez', role: 'Manager', status: 'Active' },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Active' ? COLORS.success : COLORS.error;
  };

  const getRoleBadge = (role: string) => {
    let color = COLORS.primary;
    let bg = COLORS.primaryLight;
    let label = role.toUpperCase();
    if (role.toLowerCase().includes('admin')) {
      color = COLORS.primary; bg = COLORS.primaryLight;
      label = 'ADMIN';
    } else if (role.toLowerCase().includes('sales')) {
      color = COLORS.secondary; bg = COLORS.secondaryLight;
      label = 'SALES REP';
    }
    return (
      <View style={{ backgroundColor: bg, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4, marginLeft: 12 }}>
        <Text variant="caption" weight="bold" color={color} style={{ fontSize: 12 }}>{label}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <Text variant="h2" weight="bold" style={styles.headerTitle}>User Management</Text>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={28} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.userList}>
        {users.map(user => (
          <TouchableOpacity
            key={user.id}
            style={styles.userItem}
            onPress={() => navigation.navigate('EditUser', { userId: user.id })}
            activeOpacity={0.85}
          >
            <View style={styles.userInfo}>
              <View>
                <Text variant="body1" weight="semiBold" style={styles.userName}>{user.name}</Text>
                <Text variant="caption" color="gray.500" style={styles.userPhone}>+254712345678</Text>
              </View>
              {getRoleBadge(user.role)}
            </View>
            <MaterialIcons name="chevron-right" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddUser')}>
        <Text variant="button" weight="semiBold" style={styles.addButtonText}>Add User</Text>
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
  userList: { flex: 1, padding: 16 },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  userName: { fontSize: 16, color: COLORS.gray[900] },
  userPhone: { fontSize: 14, marginTop: 2 },
  addButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 24,
  },
  addButtonText: { color: 'white', fontSize: 16, fontWeight: '700', letterSpacing: 1 },
}); 