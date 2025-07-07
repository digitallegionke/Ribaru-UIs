import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { COLORS, SHADOWS, BORDER_RADIUS, SPACING } from '../utils/constants';

interface CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  style?: ViewStyle;
  elevation?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Card({
  children,
  variant = 'elevated',
  padding = 'md',
  style,
  elevation = 'sm',
}: CardProps) {
  const cardStyle = [
    styles.base,
    styles[variant],
    styles[padding],
    SHADOWS[elevation],
    style,
  ];

  return <View style={cardStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  base: {
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
  },
  elevated: {
    backgroundColor: COLORS.background.card,
  },
  outlined: {
    backgroundColor: COLORS.background.card,
    borderWidth: 1,
    borderColor: COLORS.gray[200],
  },
  filled: {
    backgroundColor: COLORS.background.secondary,
  },
  none: {
    padding: 0,
  },
  sm: {
    padding: SPACING.sm,
  },
  md: {
    padding: SPACING.lg,
  },
  lg: {
    padding: SPACING.xl,
  },
});