import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

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

  const mono = Platform.select({ ios: 'Menlo', android: 'monospace', default: 'monospace' });

  const getStatusColor = (status: string) => {
    return status === 'Active' ? '#10B981' : '#EF4444';
  };

  const getRoleBadge = (role: string) => {
    let color = '#0A1FDA';
    let bg = '#E9EBFF';
    let label = role.toUpperCase();
    if (role.toLowerCase().includes('admin')) {
      color = '#0A1FDA'; bg = '#E9EBFF';
      label = 'ADMIN';
    } else if (role.toLowerCase().includes('sales')) {
      color = '#6366F1'; bg = '#EEF2FF';
      label = 'SALES REP';
    }
    return (
      <View style={{ backgroundColor: bg, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4, marginLeft: 12 }}>
        <Text style={{ color, fontWeight: '700', fontSize: 12, fontFamily: mono }}>{label}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { fontFamily: mono }]}>User Management</Text>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={28} color="#0A1FDA" />
        </TouchableOpacity>
      </View>

      <View style={styles.userList}>
        {users.map(user => (
          <TouchableOpacity
            key={user.id}
            style={styles.userItem}
            onPress={() => navigation.navigate('EditUser', { userId: user.id })}
          >
            <View style={styles.userInfo}>
              <View>
                <Text style={[styles.userName, { fontFamily: mono }]}>{user.name}</Text>
                <Text style={[styles.userPhone, { fontFamily: mono }]}>+254712345678</Text>
              </View>
              {getRoleBadge(user.role)}
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#0A1FDA" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddUser')}>
        <Text style={[styles.addButtonText, { fontFamily: mono }]}>Add User</Text>
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
  placeholder: { fontSize: 16, color: '#6B7280' },
  userList: { flex: 1, padding: 24 },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  userName: { fontSize: 16, fontWeight: '700', color: '#000' },
  userPhone: { fontSize: 14, color: '#6B7280', marginTop: 2 },
  addButton: {
    backgroundColor: '#0A1FDA',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 24,
  },
  addButtonText: { color: 'white', fontSize: 16, fontWeight: '700', letterSpacing: 1 },
}); 