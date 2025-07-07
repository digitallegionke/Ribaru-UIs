import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './TabNavigator';
import { AddSaleScreen } from '../screens/AddSaleScreen';
import { SelectItemScreen } from '../screens/SelectItemScreen';
import { CheckoutScreen } from '../screens/CheckoutScreen';
import { AddStockScreen } from '../screens/AddStockScreen';
import { ProductDetailScreen } from '../screens/ProductDetailScreen';
import { AddCustomerScreen } from '../screens/AddCustomerScreen';
import { AddPaymentOptionScreen } from '../screens/AddPaymentOptionScreen';
import { ProfileSettingsScreen } from '../screens/ProfileSettingsScreen';
import { AccountSettingsScreen } from '../screens/AccountSettingsScreen';
import { UserManagementScreen } from '../screens/UserManagementScreen';
import { BusinessProfileScreen } from '../screens/BusinessProfileScreen';
import { POSSetupScreen } from '../screens/POSSetupScreen';
import { OnboardingWelcomeScreen } from '../screens/OnboardingWelcomeScreen';
import { OnboardingFeaturesScreen } from '../screens/OnboardingFeaturesScreen';
import { OnboardingGetStartedScreen } from '../screens/OnboardingGetStartedScreen';
import { MockLoginScreen } from '../screens/MockLoginScreen';

export type RootStackParamList = {
  MainTabs: undefined;
  AddSale: undefined;
  SelectItem: Partial<{ onSelect: (item: string) => void }>;
  Checkout: { amount: number };
  AddStock: undefined;
  ProductDetail: { productId: string };
  AddCustomer: undefined;
  AddPaymentOption: undefined;
  ProfileSettings: undefined;
  AccountSettings: undefined;
  UserManagement: undefined;
  EditUser: { userId: string };
  AddUser: undefined;
  BusinessProfile: undefined;
  POSSetup: undefined;
  OnboardingWelcome: undefined;
  OnboardingFeatures: undefined;
  OnboardingGetStarted: undefined;
  MockLogin: undefined;
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
      <Stack.Screen name="AddCustomer" component={AddCustomerScreen} />
      <Stack.Screen name="AddPaymentOption" component={AddPaymentOptionScreen} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
      <Stack.Screen name="AccountSettings" component={AccountSettingsScreen} />
      <Stack.Screen name="UserManagement" component={UserManagementScreen} />
      <Stack.Screen name="BusinessProfile" component={BusinessProfileScreen} />
      <Stack.Screen name="POSSetup" component={POSSetupScreen} />
      <Stack.Screen name="OnboardingWelcome" component={OnboardingWelcomeScreen} />
      <Stack.Screen name="OnboardingFeatures" component={OnboardingFeaturesScreen} />
      <Stack.Screen name="OnboardingGetStarted" component={OnboardingGetStartedScreen} />
      <Stack.Screen name="MockLogin" component={MockLoginScreen} />
    </Stack.Navigator>
  );
}