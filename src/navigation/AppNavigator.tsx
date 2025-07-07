import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './TabNavigator';
import { AddSaleScreen } from '../screens/AddSaleScreen';
import { SelectItemScreen } from '../screens/SelectItemScreen';
import { CheckoutScreen } from '../screens/CheckoutScreen';
import { AddStockScreen } from '../screens/AddStockScreen';
import { ProductDetailScreen } from '../screens/ProductDetailScreen';

export type RootStackParamList = {
  MainTabs: undefined;
  AddSale: undefined;
  SelectItem: Partial<{ onSelect: (item: string) => void }>;
  Checkout: { amount: number };
  AddStock: undefined;
  ProductDetail: { productId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="AddSale" component={AddSaleScreen} />
      <Stack.Screen name="SelectItem" component={SelectItemScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="AddStock" component={AddStockScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}