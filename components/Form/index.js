import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

const Form = (props) => {
    const [task, setTask] = useState('');
    const handleTask = () => {
        if (task.length === 0) {
            alert("Bạn vui lòng nhập công việc!");
            return false;
        }
        props.onAddTask(task);
        setTask('');
        Keyboard.dismiss();
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={1}
            style={styles.addTask}>

            <TextInput
                value={task}
                style={styles.input}
                onChangeText={(text) => setTask(text)}
                placeholder='Nhiệm vụ của bạn'
            >

            </TextInput>

            <TouchableOpacity onPress={handleTask}>
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default Form