import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

interface SettingsGroup {
  title: string;
  items: Array<{
    label: string;
    onPress: () => void;
  }>;
}

export function SettingsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const mono = Platform.select({ ios: 'Menlo', android: 'monospace', default: 'monospace' });
  const settingsGroups: SettingsGroup[] = [
    {
      title: 'Account Setting',
      items: [
        {
          label: 'Profile Settings',
          onPress: () => navigation.navigate('ProfileSettings'),
        },
        {
          label: 'Account Settings',
          onPress: () => navigation.navigate('AccountSettings'),
        },
      ],
    },
    {
      title: 'Business Setting',
      items: [
        {
          label: 'User Management',
          onPress: () => navigation.navigate('UserManagement'),
        },
        {
          label: 'Business Profile',
          onPress: () => navigation.navigate('BusinessProfile'),
        },
        {
          label: 'POS Setup',
          onPress: () => navigation.navigate('POSSetup'),
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { fontFamily: mono }]}>Settings</Text>
          <TouchableOpacity>
            <MaterialIcons name="menu" size={28} color="#0A1FDA" />
          </TouchableOpacity>
        </View>

        {/* Settings Groups */}
        <View style={styles.settingsContainer}>
          {settingsGroups.map((group, groupIndex) => (
            <View key={groupIndex} style={styles.settingsGroup}>
              <View style={styles.groupHeader}>
                <Text style={[styles.groupTitle, { fontFamily: mono }]}>{group.title}</Text>
              </View>
              <View style={styles.groupContent}>
                {group.items.map((item, itemIndex) => (
                  <TouchableOpacity
                    key={itemIndex}
                    style={[
                      styles.settingsItem,
                      itemIndex !== group.items.length - 1 && styles.settingsItemBorder,
                    ]}
                    onPress={item.onPress}
                  >
                    <Text style={[styles.settingsItemText, { fontFamily: mono }]}>{item.label}</Text>
                    <MaterialIcons name="chevron-right" size={20} color="#0A1FDA" />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('MockLogin' as never)}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 32,
  },
  settingsContainer: {
    gap: 32,
    marginTop: 16,
  },
  settingsGroup: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#F6F7FF',
    borderWidth: 1.5,
    borderColor: '#E9EBFF',
  },
  groupHeader: {
    backgroundColor: '#E9EBFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0A1FDA',
    letterSpacing: 1,
  },
  groupContent: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  settingsItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  settingsItemText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  signOutButton: {
    backgroundColor: '#F87171',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 32,
    marginHorizontal: 24,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
  },
});