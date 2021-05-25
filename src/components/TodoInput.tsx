import React, { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';
import { useDarkTheme } from '../hooks/DarkTheme';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');
  const { isDarkMode } = useDarkTheme();

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow, isDarkMode && styles.inputContainerDark]}>
      <TextInput 
        style={[styles.input, isDarkMode && styles.inputDark]} 
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        value={task}
        placeholderTextColor={isDarkMode ? "#e1e1e6" : "#a09cb1"}
        onChangeText={setTask}
        onSubmitEditing={() => {
          handleAddNewTask()
        }}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, isDarkMode && styles.addButtonDark]}
        onPress={() => handleAddNewTask()}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainerDark: {
    backgroundColor: '#212136',
  },
  input: {
    flex: 1,
    color: '#A09CB1',
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputDark: {
    color: '#e1e1e6',
    backgroundColor: '#212136',
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButtonDark: {
    backgroundColor: '#565bff',   
  }
});