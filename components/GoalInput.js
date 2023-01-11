import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoalText] = useState('');

    function goalInputHandler(text) {
        setEnteredGoalText(text);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoal);
        setEnteredGoalText('');
    }  

    return (
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.textInput}
            placeholder="Your Daily Task!"
            onChangeText={goalInputHandler}
            value={enteredGoal} />
            <Button
            color="#b00606"
            title="Add Task"
            onPress={addGoalHandler} />
        </View>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#b00606'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#b00606',
    width: '70%',
    marginRight: 8,
    padding: 8,
    backgroundColor: '#FACECE',
  },
})
