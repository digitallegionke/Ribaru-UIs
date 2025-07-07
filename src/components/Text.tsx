import React from 'react';
import { Text as RNText, StyleSheet, TextStyle } from 'react-native';
import { COLORS, TYPOGRAPHY, FONTS } from '../utils/constants';

interface TextProps {
  children: React.ReactNode;
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'caption' | 'button' | 'label';
  color?: keyof typeof COLORS | string;
  align?: 'left' | 'center' | 'right';
  style?: TextStyle;
  numberOfLines?: number;
  weight?: 'regular' | 'medium' | 'semiBold' | 'bold';
}

function isFigure(child: React.ReactNode): boolean {
  if (typeof child === 'number') return true;
  if (typeof child === 'string') {
    // Allow numbers, commas, periods, spaces, and currency symbols
    return /^[$€£¥₩₹\d,.\s+-]+$/.test(child.trim());
  }
  return false;
}

function resolveColor(color: keyof typeof COLORS | string): string {
  // If color is a key in COLORS and resolves to a string, use it
  if (typeof color === 'string' && COLORS[color as keyof typeof COLORS]) {
    const resolved = COLORS[color as keyof typeof COLORS];
    if (typeof resolved === 'string') return resolved;
  }
  // Otherwise, return the color as-is
  return color as string;
}

export function Text({
  children,
  variant = 'body1',
  color = 'black',
  align = 'left',
  style,
  numberOfLines,
  weight,
}: TextProps) {
  // Determine font family: use mono for figures, otherwise use weight or regular
  let fontFamily = FONTS.regular;
  if (isFigure(children)) {
    fontFamily = FONTS.mono;
  } else if (weight) {
    fontFamily = FONTS[weight];
  }

  const textStyle: TextStyle[] = [
    styles.base,
    TYPOGRAPHY[variant],
    { color: resolveColor(color) },
    { textAlign: align },
    { fontFamily },
    style as TextStyle,
  ];

  return (
    <RNText style={textStyle} numberOfLines={numberOfLines}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: FONTS.regular,
  },
});