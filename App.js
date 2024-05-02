import { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './Components/GoalItem';


export default function App() {
  const[goals, setGoals]=useState([])

  function handleAddGoals(enteredGoalText){
    setGoals(()=> [...goals,{text: enteredGoalText}])
  }

  function handle(){
    console.log(enteredGoalsText)
    setGoals(() => [goals,{text:enteredGoalsText,key: Math.random().toString()}])
  }
  return (
    <View style={styles.container}>
      <GoalInput
      onAddGoal={handleAddGoal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
        data={goals}
        style={styles.textInput}
        placeholder='Your Goals'
        onChangeText={handleInputGoals}
        />
        <Buttton
        title='Add Goals'
        color={'#A3FFD6'}
        onPress={handleAddGoals}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
        data={goals}
        rederItem={(itemData) =>{
          <View style ={styles.goalsItem}>
          <Text style = {styles.goalsText}>
            {itwmData.item.text}
            </Text>
            </View>
        }}
        >
        </FlatList>


      </View>


    </View>
    
  );
}