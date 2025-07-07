import React, { useState } from 'react';
import {
  View,
  Text,
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

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type CheckoutRouteProp = RNRouteProp<RootStackParamList, 'Checkout'>;

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
            <MaterialIcons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Checkout</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Amount */}
          <View style={styles.amountSection}>
            <Text style={styles.amountLabel}>Amount to be paid</Text>
            <Text style={styles.amountValue}>
              <Text style={styles.currency}>KES </Text>
              {amount.toLocaleString()}
            </Text>
          </View>

          {/* Options */}
          <View style={styles.optionsSection}>
            <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('AddCustomer')}>
              <View style={styles.optionLeft}>
                <MaterialIcons name="person-add" size={20} color="#0A1FDA" />
                <Text style={styles.optionText}>Add Customer</Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('AddPaymentOption')}>
              <View style={styles.optionLeft}>
                <MaterialIcons name="credit-card" size={20} color="#0A1FDA" />
                <Text style={styles.optionText}>Add Payment Option</Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          {/* Add Note */}
          <View style={styles.noteSection}>
            <Text style={styles.noteLabel}>Add Note</Text>
            <TextInput
              style={styles.noteInput}
              placeholder="Note"
              value={note}
              onChangeText={setNote}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
        </View>

        {/* Confirm Button */}
        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmSale}>
            <Text style={styles.confirmButtonText}>Confirm Sale</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
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
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  amountSection: {
    marginBottom: 32,
  },
  amountLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  amountValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0A1FDA',
  },
  currency: {
    fontSize: 16,
    color: '#6B7280',
  },
  optionsSection: {
    marginBottom: 32,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#0A1FDA',
    marginLeft: 12,
    fontWeight: '500',
  },
  noteSection: {
    marginBottom: 32,
  },
  noteLabel: {
    fontSize: 14,
    color: '#0A1FDA',
    fontWeight: '500',
    marginBottom: 8,
  },
  noteInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    minHeight: 100,
  },
  bottomSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  confirmButton: {
    backgroundColor: '#0A1FDA',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});