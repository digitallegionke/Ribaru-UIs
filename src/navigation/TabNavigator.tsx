import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen';
import { SalesScreen } from '../screens/SalesScreen';
import { StockScreen } from '../screens/StockScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

export type TabParamList = {
  Home: undefined;
  Sales: undefined;
  Stocks: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarActiveTintColor: '#0A1FDA',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Sales"
        component={SalesScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="shopping-cart" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Stocks"
        component={StockScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="inventory" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="settings" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}