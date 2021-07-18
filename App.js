import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tasks from './src/pages/Tasks/';
import NewTask from './src/pages/NewTask/';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tasks">
        <Stack.Screen
          name="Tarefa"
          component={Tasks}
          options={{
            headerTintColor:"#6EACFF"
          }}
        />

        <Stack.Screen
          name="Nova Tarefa"
          component={NewTask}
          options={{
            headerTintColor:"#6EACFF"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}