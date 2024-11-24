import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { SalesScreen } from './screens/SalesScreen';
import { StockScreen } from './screens/StockScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { UserManagementScreen } from './screens/UserManagementScreen';
import { AddUserScreen } from './screens/AddUserScreen';
import { EditUserScreen } from './screens/EditUserScreen';
import { AddStockScreen } from './screens/AddStockScreen';
import { Home, ShoppingCart, Package, Settings } from 'lucide-react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
        },
        tabBarActiveTintColor: '#1D4ED8',
        tabBarInactiveTintColor: '#6B7280',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Sales"
        component={SalesScreen}
        options={{
          tabBarIcon: ({ color }) => <ShoppingCart size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Stock"
        component={StockScreen}
        options={{
          tabBarIcon: ({ color }) => <Package size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <Settings size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="UserManagement" component={UserManagementScreen} />
        <Stack.Screen name="AddUser" component={AddUserScreen} />
        <Stack.Screen name="EditUser" component={EditUserScreen} />
        <Stack.Screen name="AddStock" component={AddStockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

