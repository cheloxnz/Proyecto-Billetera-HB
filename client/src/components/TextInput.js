import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';
import { green } from 'color-name';

const TextInput = ({ errorText, ...props }) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      // selectionColor='#FBC02D'
      // underlineColor="transparent"
      mode="focused"
      theme={{ colors: { primary: '#FBC02D' } }}
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
    height: 60,
    borderRadius: 4
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default TextInput;
