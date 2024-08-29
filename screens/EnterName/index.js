import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text, Image, ScrollView } from 'react-native';

const PersonalInfoScreen = () => {
  const [fullName, setFullName] = useState('');
  const [birthYear, setBirthYear] = useState('');

  const handleSubmit = () => {
    // Here you would typically handle the submission of the data, e.g., via an API call
    console.log('Submitted:', {
      fullName,
      birthYear
    });
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.title}>Enter Your Personal Information</Text>
        <TextInput style={styles.input} onChangeText={setFullName} value={fullName} placeholder="Full Name" keyboardType="default" />
        <TextInput style={styles.input} onChangeText={setBirthYear} value={birthYear} placeholder="Year of Birth" keyboardType="numeric" />
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleSubmit} color="#007AFF" />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 50,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%'
  }
});
export default PersonalInfoScreen;