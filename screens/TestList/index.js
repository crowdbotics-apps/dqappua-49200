import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SelectionScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Choose Your Test</Text>
      </View>
      <View style={styles.selectionContainer}>
        <TouchableOpacity style={styles.optionContainer}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.image} />
          <Text style={styles.optionTitle}>Test A</Text>
          <Text style={styles.optionDescription}>This test is designed for beginners.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.image} />
          <Text style={styles.optionTitle}>Test B</Text>
          <Text style={styles.optionDescription}>This test is designed for advanced users.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  header: {
    padding: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
  selectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10
  },
  optionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center'
  }
});
export default SelectionScreen;