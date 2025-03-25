import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export const AuthorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Author</Text>
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.role}>Lead Developer</Text>
      <Text style={styles.description}>
        Passionate about creating amazing mobile experiences
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
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});