import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Text } from '../components';
import { COLORS } from '../utils/constants';

interface SettingsGroup {
  title: string;
  items: Array<{
    label: string;
    onPress: () => void;
  }>;
}

export function SettingsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
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
            <MaterialIcons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
          <Text variant="h2" weight="bold" color="primary" style={styles.headerTitle}>Settings</Text>
          <TouchableOpacity>
            <MaterialIcons name="menu" size={28} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* Settings Groups */}
        <View style={styles.settingsContainer}>
          {settingsGroups.map((group, groupIndex) => (
            <View key={groupIndex} style={styles.settingsGroupCard}>
              <View style={styles.groupHeader}>
                <Text variant="h3" weight="bold" color="primary" style={styles.groupTitle}>{group.title}</Text>
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
                    activeOpacity={0.85}
                  >
                    <Text variant="body1" weight="medium" style={styles.settingsItemText}>{item.label}</Text>
                    <MaterialIcons name="chevron-right" size={20} color={COLORS.primary} />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('MockLogin' as never)}>
          <Text variant="button" weight="semiBold" style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.primary,
  },
  settingsContainer: {
    gap: 24,
    marginTop: 8,
  },
  settingsGroupCard: {
    marginBottom: 8,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: COLORS.background.secondary,
    borderWidth: 1,
    borderColor: COLORS.primaryLight,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  groupHeader: {
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: '700',
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
    paddingVertical: 18,
    borderRadius: 12,
  },
  settingsItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.background.secondary,
  },
  settingsItemText: {
    fontSize: 16,
    color: COLORS.gray[900],
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  signOutButton: {
    backgroundColor: COLORS.error,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 32,
    marginHorizontal: 16,
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