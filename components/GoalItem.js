import { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';


function GoalItem(props) {
    const [done, setDone] = useState(false);
    function onDone() {
        setDone(!done);
    }

    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={onDone}
                onLongPress={props.onDeleteItem.bind(this, props.id)}
                android_ripple={{color: 'red'}}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={[styles.goalText, done ? styles.done : '']}>{props.text}</Text>
            </Pressable>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 0,
    borderRadius: 6,
    backgroundColor: 'pink',
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    padding: 8,
  },
  done: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
});