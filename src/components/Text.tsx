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

export function Text({
  children,
  variant = 'body1',
  color = 'black',
  align = 'left',
  style,
  numberOfLines,
  weight,
}: TextProps) {
  const textColor = COLORS[color as keyof typeof COLORS] || color;
  
  const textStyle = [
    styles.base,
    TYPOGRAPHY[variant],
    { color: textColor },
    { textAlign: align },
    weight && { fontFamily: FONTS[weight] },
    style,
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