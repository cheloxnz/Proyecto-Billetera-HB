import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../core/theme';

const Button = ({ mode, style, children, ...props }) => (
  <PaperButton  
    style={[
      styles.sg,
      styles.button,
      mode === 'outlined' && { backgroundColor: theme.colors.surface},
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    width: '100%',
    marginVertical: 10,
    shadowColor: "#000",
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  elevation: 24,
  shadowOffset: {
    width: 0,
    height: 12,
  },
},
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  }
});

export default Button;
