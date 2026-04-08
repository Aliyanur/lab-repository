import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ResponsiveHeaderProps {
  title: string;
}

export function ResponsiveHeader({ title }: ResponsiveHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#4CAF50',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: 'white'
  }
});