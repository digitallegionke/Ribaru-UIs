import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
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

  const getStatusColor = (status: string) => {
    return status === 'Active' ? '#10B981' : '#EF4444';
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Management</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.userList}>
        {users.map(user => (
          <TouchableOpacity
            key={user.id}
            style={styles.userItem}
            onPress={() => navigation.navigate('EditUser', { userId: user.id })}
          >
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userRole}>{user.role}</Text>
            </View>
            <Text style={[styles.userStatus, { color: getStatusColor(user.status) }]}>
              {user.status}
            </Text>
            <MaterialIcons name="chevron-right" size={24} color="#9CA3AF" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddUser')}>
        <MaterialIcons name="person-add" size={24} color="#fff" />
        <Text style={styles.addButtonText}>Add User</Text>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  userName: { fontSize: 16, fontWeight: '600', color: '#000' },
  userRole: { fontSize: 14, color: '#6B7280' },
  userStatus: { fontSize: 14, color: '#6B7280' },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#10B981',
    borderRadius: 8,
  },
  addButtonText: { fontSize: 16, fontWeight: '600', color: '#fff' },
}); 