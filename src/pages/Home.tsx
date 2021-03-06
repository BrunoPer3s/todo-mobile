import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { useDarkTheme } from '../hooks/DarkTheme';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { isDarkMode } = useDarkTheme();
  function handleAddTask(newTaskTitle: string) {
    if(!newTaskTitle) {
      return;
    }

    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldState => [...oldState, data]);
  }

  function handleMarkTaskAsDone(id: number) {
    const changedTasks = tasks.map(task => task.id === id ? {
        ...task,
        done: !task.done
    } : {
      ...task
    });

    setTasks(changedTasks);
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter(task => task.id !== id);

    setTasks(newTasks);
  }

  return (
    <View style={!!isDarkMode && styles.Container}>
      <Header />
      <TodoInput addTask={handleAddTask} />
      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#1f1f1f', 
    flex: 1
  }
})