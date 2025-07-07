import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp as RNRouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { Button, Card, Text } from '../components';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../utils/constants';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type CheckoutRouteProp = RNRouteProp<RootStackParamList, 'Checkout'>;

interface CheckoutScreenProps {
  amount: number;
}

export function CheckoutScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<CheckoutRouteProp>();
  const { amount } = route.params;
  const [note, setNote] = useState('');

  const handleConfirmSale = () => {
    // Handle sale confirmation
    navigation.navigate('MainTabs');
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
          <Text variant="h2" weight="bold" color="primary">Checkout</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Amount */}
          <Card elevation="md" padding="lg" style={styles.amountSection}>
            <Text variant="label" color="gray.500">Amount to be paid</Text>
            <Text variant="h1" color="primary" weight="bold" style={{ marginTop: 8 }}>KES {amount.toLocaleString()}</Text>
          </Card>

          {/* Options */}
          <View style={styles.optionsSection}>
            <TouchableOpacity onPress={() => navigation.navigate('AddCustomer')}>
              <Card elevation="sm" padding="md" style={styles.optionItem}>
                <View style={styles.optionLeft}>
                  <MaterialIcons name="person-add" size={22} color={COLORS.primary} />
                  <Text variant="body1" color="primary" weight="medium">Add Customer</Text>
                </View>
                <MaterialIcons name="chevron-right" size={22} color={COLORS.primary} />
              </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('AddPaymentOption')}>
              <Card elevation="sm" padding="md" style={styles.optionItem}>
                <View style={styles.optionLeft}>
                  <MaterialIcons name="credit-card" size={22} color={COLORS.primary} />
                  <Text variant="body1" color="primary" weight="medium">Add Payment Option</Text>
                </View>
                <MaterialIcons name="chevron-right" size={22} color={COLORS.primary} />
              </Card>
            </TouchableOpacity>
          </View>

          {/* Add Note */}
          <View style={styles.noteSection}>
            <Text variant="label" color="primary" style={{ marginBottom: 8 }}>Add Note</Text>
            <TextInput
              style={styles.noteInput}
              placeholder="Note"
              value={note}
              onChangeText={setNote}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              placeholderTextColor={COLORS.gray[400]}
            />
          </View>
        </View>

        {/* Confirm Button */}
        <View style={styles.bottomSection}>
          <Button
            title="Confirm Sale"
            onPress={handleConfirmSale}
            variant="primary"
            size="lg"
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.lg,
    backgroundColor: COLORS.background.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xl,
  },
  amountSection: {
    marginBottom: SPACING['3xl'],
    marginTop: SPACING.lg,
  },
  optionsSection: {
    marginBottom: SPACING['3xl'],
    gap: SPACING.lg,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.lg,
  },
  noteSection: {
    marginBottom: SPACING['3xl'],
  },
  noteInput: {
    backgroundColor: COLORS.background.card,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.gray[200],
    minHeight: 100,
    color: COLORS.gray[900],
    ...SHADOWS.sm,
  },
  bottomSection: {
    paddingHorizontal: SPACING.xl,
    paddingBottom: SPACING.xl,
  },
});