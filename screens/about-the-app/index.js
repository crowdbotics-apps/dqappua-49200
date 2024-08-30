import React, { useState } from "react";
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { lazyfetch } from "2lazy2rest";

const SurveyScreen = () => {
  const [currentScreen, setCurrentScreen] = useState("personalInfo");
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [answers, setAnswers] = useState({});

  const goToTestSelection = () => setCurrentScreen("testSelection");

  const goToTest1 = () => setCurrentScreen("test1");

  const submitTest1 = async () => {
    await createAndSavePDF();
    setCurrentScreen("finalMessage");
  };

  const handleAnswer = (question, answer) => {
    setAnswers(prev => ({ ...prev,
      [question]: answer
    }));
  };

  const createAndSavePDF = async () => {
    const content = `
      Результати тесту "Адаптивність"\n
      ПІБ: ${name}\n
      Рік народження: ${birthYear}\n
      Результати:\n
      1. Буває, що я серджусь: ${answers.q1 || "Невідомо"}\n
      2. Зазвичай вранці я прокидаюся свіжим і відпочившим: ${answers.q2 || "Невідомо"}\n
      3. Зараз я приблизно так само працездатний, як завжди: ${answers.q3 || "Невідомо"}\n
      <!-- Додайте інші питання аналогічно -->
    `;
    const response = await lazyfetch({
      url: "https://your-api-endpoint-to-create-pdf.com/create-pdf",
      method: "POST",
      data: {
        content: content
      },
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.status === 200) {
      const pdfPath = `${RNFS.DocumentDirectoryPath}/test_results.pdf`; // Сохранение PDF на устройстве

      await RNFS.writeFile(pdfPath, response.data, "base64");
      Alert.alert("PDF збережено", `Файл збережено на шляху: ${pdfPath}`);
    } else {
      Alert.alert("Помилка", "Не вдалося створити PDF-файл");
    }
  };

  return <SafeAreaView style={styles.container}>
      {currentScreen === "personalInfo" && <View style={styles.screen}>
          <Text style={styles.header}>Опитування</Text>
          <Text style={styles.label}>ПІБ:</Text>
          <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Ваше ПІБ" />
          <Text style={styles.label}>Рік народження:</Text>
          <TextInput style={styles.input} onChangeText={setBirthYear} value={birthYear} placeholder="Рік народження" keyboardType="numeric" />
          <Button title="Продовжити" onPress={goToTestSelection} />
        </View>}
      {currentScreen === "testSelection" && <View style={styles.screen}>
          <Text style={styles.header}>Оберіть тест</Text>
          <Button title="Адаптивність" onPress={goToTest1} />
          <Button title="Тест 2" disabled />
        </View>}
      {currentScreen === "test1" && <View style={styles.screen}>
          <Text style={styles.header}>Адаптивність</Text>

          {
        /* Приклади питань та відповідей */
      }
          <Text style={styles.question}>1. Буває, що я серджусь.</Text>
          <TouchableOpacity onPress={() => handleAnswer("q1", "так")}>
            <Text style={styles.answer}>a) так</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAnswer("q1", "ні")}>
            <Text style={styles.answer}>б) ні</Text>
          </TouchableOpacity>

          <Text style={styles.question}>
            2. Зазвичай вранці я прокидаюся свіжим і відпочившим.
          </Text>
          <TouchableOpacity onPress={() => handleAnswer("q2", "так")}>
            <Text style={styles.answer}>a) так</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAnswer("q2", "ні")}>
            <Text style={styles.answer}>б) ні</Text>
          </TouchableOpacity>

          <Text style={styles.question}>
            3. Зараз я приблизно так само працездатний, як завжди.
          </Text>
          <TouchableOpacity onPress={() => handleAnswer("q3", "так")}>
            <Text style={styles.answer}>a) так</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAnswer("q3", "ні")}>
            <Text style={styles.answer}>б) ні</Text>
          </TouchableOpacity>

          {
        /* Додайте решту питань аналогічно */
      }
          <Text onPress={submitTest1} style={styles.buttonText}>
            Завершити
          </Text>
        </View>}
      {currentScreen === "finalMessage" && <View style={styles.screen}>
          <Text style={styles.header}>Дякуємо!</Text>
          <Text>Дані збережено.</Text>
        </View>}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  screen: {
    alignItems: "center",
    width: "100%"
  },
  header: {
    fontSize: 24,
    marginBottom: 20
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 10
  },
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  buttonText: {
    marginTop: 20,
    color: "blue"
  },
  question: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold"
  },
  answer: {
    fontSize: 16,
    padding: 5
  }
});
export default SurveyScreen;