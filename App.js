import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  // const [outputText, setOutputText] = useState(
  //   "Open up App.js to start working on your app!"
  // );
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map(goal => (
          <Text>{goal}</Text>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  inputContainer: { flexDirection: "column" }
});
