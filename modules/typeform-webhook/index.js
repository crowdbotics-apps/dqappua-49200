import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const SurveyScreen = () => {
  const questions = ["Буває, що я серджусь.", "Зазвичай вранці я прокидаюся свіжим і відпочившим.", "Зараз я приблизно так само працездатний, як завжди.", "Доля безперечно несправедлива до мене.", "Запори у мене бувають дуже рідко.", "Часом мені дуже хотілося покинути свій будинок.", "Часом у мене бувають напади сміху чи плачу, з якими я ніяк не можу впоратися.", "Мені здається, що мене ніхто не розуміє.", "Считаю, что если кто-то причинил мне зло, то я должен ответить ему тем же."];
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  return <SafeAreaView style={_styles.ARxSFzXt}>
      <ScrollView style={_styles.uBHxsrrP}>
        {questions.map((question, index) => <View key={index} style={_styles.qJCQzylg}>
            <Text style={_styles.whagBFoH}>{index + 1}. {question}</Text>
            <View style={_styles.CiIlMneV}>
              <TouchableOpacity onPress={() => handleAnswer(index, 'так')} style={{
            backgroundColor: answers[index] === 'так' ? 'blue' : 'gray',
            padding: 10,
            borderRadius: 5
          }}>
                <Text style={_styles.sNeYIYYQ}>так</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleAnswer(index, 'ні')} style={{
            backgroundColor: answers[index] === 'ні' ? 'blue' : 'gray',
            padding: 10,
            borderRadius: 5
          }}>
                <Text style={_styles.sYFpfyuM}>ні</Text>
              </TouchableOpacity>
            </View>
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

export default SurveyScreen;

const _styles = StyleSheet.create({
  ARxSFzXt: {
    flex: 1
  },
  uBHxsrrP: {
    padding: 20
  },
  qJCQzylg: {
    marginBottom: 20
  },
  whagBFoH: {
    fontSize: 16,
    marginBottom: 10
  },
  CiIlMneV: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  sNeYIYYQ: {
    color: "white"
  },
  sYFpfyuM: {
    color: "white"
  }
});