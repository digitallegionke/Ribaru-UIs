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
  Platform,
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

  const mono = Platform.select({ ios: 'Menlo', android: 'monospace', default: 'monospace' });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { fontFamily: mono }]}>Checkout</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Amount */}
          <View style={styles.amountSection}>
            <Text style={[styles.amountLabel, { fontFamily: mono }]}>Amount to be paid</Text>
            <Text style={[styles.amountValue, { color: '#0A1FDA', fontFamily: mono }]}>KES {amount.toLocaleString()}</Text>
          </View>

          {/* Options */}
          <View style={styles.optionsSection}>
            <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('AddCustomer')}>
              <View style={styles.optionLeft}>
                <MaterialIcons name="person-add" size={22} color="#0A1FDA" />
                <Text style={[styles.optionText, { fontFamily: mono }]}>Add Customer</Text>
              </View>
              <MaterialIcons name="chevron-right" size={22} color="#0A1FDA" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('AddPaymentOption')}>
              <View style={styles.optionLeft}>
                <MaterialIcons name="credit-card" size={22} color="#0A1FDA" />
                <Text style={[styles.optionText, { fontFamily: mono }]}>Add Payment Option</Text>
              </View>
              <MaterialIcons name="chevron-right" size={22} color="#0A1FDA" />
            </TouchableOpacity>
          </View>

          {/* Add Note */}
          <View style={styles.noteSection}>
            <Text style={[styles.noteLabel, { fontFamily: mono }]}>Add Note</Text>
            <TextInput
              style={[styles.noteInput, { fontFamily: mono }]}
              placeholder="Note"
              value={note}
              onChangeText={setNote}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              placeholderTextColor="#C4C4C4"
            />
          </View>
        </View>

        {/* Confirm Button */}
        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmSale}>
            <Text style={[styles.confirmButtonText, { fontFamily: mono }]}>Confirm Sale</Text>
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
    backgroundColor: '#F6F7FF',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
  },
  amountLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  amountValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#0A1FDA',
    letterSpacing: 1,
  },
  currency: {
    fontSize: 16,
    color: '#6B7280',
  },
  optionsSection: {
    marginBottom: 32,
    gap: 12,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F6F7FF',
    borderRadius: 12,
    padding: 18,
    borderWidth: 1.5,
    borderColor: '#E9EBFF',
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
    backgroundColor: '#F6F7FF',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: '#E9EBFF',
    minHeight: 100,
    color: '#222',
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
    marginTop: 12,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
  },
});