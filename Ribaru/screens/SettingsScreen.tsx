import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export function SettingsScreen() {
  const navigation = useNavigation();

  const settingsOptions = [
    { title: 'Profile Settings', screen: 'ProfileSettings' },
    { title: 'Account Settings', screen: 'AccountSettings' },
    { title: 'User Management', screen: 'UserManagement' },
    { title: 'Business Profile', screen: 'BusinessProfile' },
    { title: 'QR Code', screen: 'QRCode' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {settingsOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionItem}
          onPress={() => navigation.navigate(option.screen)}
        >
          <Text style={styles.optionText}>{option.title}</Text>
          <ChevronRight size={24} color="#6B7280" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  optionText: {
    fontSize: 16,
    color: '#111827',
  },
});

