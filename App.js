
import React from 'react';
import {
  View,
  Text,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to Mobile Shop!
      </Text>

      <Text>Browse our products!</Text>

      <Pressable
        style={styles.button}
        onPress={() => Alert.alert('Products coming soon!')}
      >
        <Text style={styles.buttonText}>
          View Products
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#1D4ED8',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1D4ED8',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
