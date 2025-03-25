import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Information</Text>
      <Text style={styles.description}>
        This is a demo app built with React Native and TypeScript
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});