import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import type { RouteProp } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type EditUserRouteProp = RouteProp<RootStackParamList, 'EditUser'>;

const mockRoles = ['Admin', 'Manager', 'Cashier'];
const mockStatuses = ['Active', 'Inactive'];

export function EditUserScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<EditUserRouteProp>();
  const { userId } = route.params;

  // Mock user data for demo
  const mockUser = {
    name: 'Kush Patel',
    email: 'kush.patel@email.com',
    role: 'Admin',
    status: 'Active',
  };

  const [name, setName] = useState(mockUser.name);
  const [email, setEmail] = useState(mockUser.email);
  const [role, setRole] = useState(mockUser.role);
  const [status, setStatus] = useState(mockUser.status);
  const [showRoleList, setShowRoleList] = useState(false);
  const [showStatusList, setShowStatusList] = useState(false);

  const handleSave = () => {
    // In a real app, save the user
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit User</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="User Name"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Role</Text>
            <TouchableOpacity style={styles.selectButton} onPress={() => setShowRoleList(!showRoleList)}>
              <Text style={styles.selectButtonText}>{role}</Text>
              <MaterialIcons name="expand-more" size={20} color="#0A1FDA" />
            </TouchableOpacity>
            {showRoleList && (
              <View style={styles.dropdownList}>
                {mockRoles.map(r => (
                  <TouchableOpacity key={r} style={styles.dropdownItem} onPress={() => { setRole(r); setShowRoleList(false); }}>
                    <Text style={styles.dropdownItemText}>{r}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Status</Text>
            <TouchableOpacity style={styles.selectButton} onPress={() => setShowStatusList(!showStatusList)}>
              <Text style={styles.selectButtonText}>{status}</Text>
              <MaterialIcons name="expand-more" size={20} color="#0A1FDA" />
            </TouchableOpacity>
            {showStatusList && (
              <View style={styles.dropdownList}>
                {mockStatuses.map(s => (
                  <TouchableOpacity key={s} style={styles.dropdownItem} onPress={() => { setStatus(s); setShowStatusList(false); }}>
                    <Text style={styles.dropdownItemText}>{s}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
  form: { flex: 1, padding: 24 },
  formGroup: { marginBottom: 20 },
  label: { fontSize: 16, color: '#374151', marginBottom: 8 },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    color: '#000',
  },
  selectButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  selectButtonText: {
    fontSize: 16,
    color: '#000',
  },
  dropdownList: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    maxHeight: 200,
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  dropdownItem: {
    padding: 8,
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#0A1FDA',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 