import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

const Paragraph = ({ children,style}) => <Text style={styles.text,style}>{children}</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    textAlign: 'center',
    marginBottom: 14,

  },
});

export default memo(Paragraph);
