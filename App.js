import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const[enteredFoalText, setEnteredGoalText] = useState('')
  cost[globalThis, setGoals]= useState([])

  function handleInputGoals(enteredText){
    console.log(enteredText)
    setEnteredGoalsText(enteredText)
  }
  function handleAddGoals(){
    console.log(enteredGoalsText)
    setGoals(() => [goals,{text:enteredGoalsText,key: Math.random().toString()}])
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    PaddingTop:50,
    PaddingHorizontal:20,
  },
  inputcontainer:{
    flex:1,
    flexdirecrion:'row'
    justifycontent:'center',
    alignItems:'center'
    marginbotton:20,
    borderbottonwidth:1,
    borderbottoncolor:'#7BC9FF'
  },
  btnGoal:{
    borderRadius:20,
    backgroundcolor:'#CCCCCC'
  },
  textinput:{
    borderwidth:1,
    bordercolor:'#CCCCCC',
    width:'80%',
    marginright:3,
    padding:8,
    borderradius:5,
  },
  goalsItem:{
    margin:0,
    padding:0,
    borderRadius:6,
    backgroundcolor:'#8576FF'
    color:'White'
  }.
  goalText:
  {
    color:'white'
  }
})

const styles = styleSheet.create({
});