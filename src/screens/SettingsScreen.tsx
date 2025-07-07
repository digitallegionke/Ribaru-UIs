import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { ChevronRight } from 'lucide-react-native';

interface SettingsGroup {
  title: string;
  items: Array<{
    label: string;
    onPress: () => void;
  }>;
}

export function SettingsScreen() {
  const settingsGroups: SettingsGroup[] = [
    {
      title: 'Account Setting',
      items: [
        {
          label: 'Profile Settings',
          onPress: () => console.log('Profile Settings'),
        },
        {
          label: 'Account Settings',
          onPress: () => console.log('Account Settings'),
        },
      ],
    },
    {
      title: 'Business Setting',
      items: [
        {
          label: 'User Management',
          onPress: () => console.log('User Management'),
        },
        {
          label: 'Business Profile',
          onPress: () => console.log('Business Profile'),
        },
        {
          label: 'POS Setup',
          onPress: () => console.log('POS Setup'),
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={styles.headerTitle}>Settings</Text>

        {/* Settings Groups */}
        <View style={styles.settingsContainer}>
          {settingsGroups.map((group, groupIndex) => (
            <View key={groupIndex} style={styles.settingsGroup}>
              <View style={styles.groupHeader}>
                <Text style={styles.groupTitle}>{group.title}</Text>
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
                    <Text style={styles.settingsItemText}>{item.label}</Text>
                    <ChevronRight size={16} color="#9CA3AF" />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 32,
  },
  settingsContainer: {
    gap: 32,
  },
  settingsGroup: {
    marginBottom: 16,
  },
  groupHeader: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  groupContent: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
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
    color: '#6B7280',
  },
});