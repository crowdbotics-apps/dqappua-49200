import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
const questions = [{
  id: 1,
  type: 'multiple-choice',
  question: 'What is the capital of France?',
  options: ['Paris', 'London', 'Berlin', 'Madrid'],
  answer: 'Paris'
}, {
  id: 2,
  type: 'true-false',
  question: 'The earth is flat.',
  options: ['True', 'False'],
  answer: 'False'
}, {
  id: 3,
  type: 'multiple-choice',
  question: 'Which of these is a programming language?',
  options: ['HTML', 'Python', 'CSS'],
  answer: 'Python'
}];

const QuestionScreen = () => {
  const [selectedAnswers, setSelectedAnswers] = React.useState({});

  const handleSelectAnswer = (questionId, option) => {
    setSelectedAnswers(prev => ({ ...prev,
      [questionId]: option
    }));
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {questions.map(question => <View key={question.id} style={styles.questionContainer}>
            <Text style={styles.questionText}>{question.question}</Text>
            {question.options.map(option => <TouchableOpacity key={option} style={[styles.optionButton, selectedAnswers[question.id] === option && styles.selectedOption]} onPress={() => handleSelectAnswer(question.id, option)}>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>)}
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5'
  },
  contentContainer: {
    padding: 20
  },
  questionContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#e4e4e7',
    borderRadius: 5,
    marginBottom: 10
  },
  selectedOption: {
    backgroundColor: '#4ade80'
  },
  optionText: {
    fontSize: 16
  }
});
export default QuestionScreen;