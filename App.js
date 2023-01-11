import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(text) {
    setGoals(goals => [
      { text: text, id: Math.random().toString()},
      ...goals,
    ]);
  };

  function deleteGoalHandler(id) {
    setGoals(goals => {
      return goals.filter((goal) => id !== goal.id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals} renderItem={item => {
            return (
              <GoalItem
                text={item.item.text}
                id={item.item.id}
                onDeleteItem={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}>
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: '#D45050'
  },
  goalsContainer: {
    flex: 5,
  },
});
