import React, {useState} from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform,TextInput, TouchableOpacity, Keyboard } from "react-native";
import Task from './components/Task'
export default function App() 
{

  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([])

  const handleTask = ()=>{
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  }
  const completeTask = (index)=>{
    let itemsCopy = [...taskItem];
    itemsCopy.splice(index,1);
    setTaskItem(itemsCopy)
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}> Today Tasks </Text>
        <View style={styles.items}>
          {
            taskItem.map((tasks, index)=>{
              return  (
                <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                  <Task task={tasks}/>
                </TouchableOpacity>
              )
            })
          }         
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding":"height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a Task'} value={task} onChangeText  ={text => setTask(text)}/>
        <TouchableOpacity onPress={()=>handleTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize:20,
    fontWeight:'bold'
  },
  items: {
    marginTop:30
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#c0c0c0',
    borderWidth:1,
    width:250
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#c0c0c0',
    borderWidth:1,
  },
  addText:{}
});
