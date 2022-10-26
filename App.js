
// import React in our code
import React, { useState } from "react";

import { Alert, Text, View, TouchableOpacity, ScrollView } from "react-native";
import Task from './components/Task/index'
import styles from "./App.component.style";
import Form from "./components/Form";
/* https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=d1586f596d97979063a6457adacfd982
 */

const getDataUsingPost = () => {
  //POST json
  var dataToSend = { title: "foo", body: "bar", userId: 1 };
  //making data to send on server
  var formBody = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  //POST request
  fetch("http://172.20.2.50/api/Remote/Robots?model=AGV-500&map=demo-f1", {
    mode: "no-cors",
    method: "POST", //Request Type
    body: formBody, //post body
    headers: {
      //Header Definition
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      alert(JSON.stringify(responseJson));
      console.log(responseJson);
    })
    //If response is not in json then in error
    .catch((error) => {
      alert(JSON.stringify(error));
      console.error(error);
    });
};

export default function App() {
  const getDataUsingGet = () => {
    //GET request
    const apiURL =
      "http://172.20.2.50/api/Remote/Robots?model=AGV-500&map=demo-f1";
    fetch(apiURL, {
      method: "GET",
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
        this.setState({
          data: responseJson,
        });
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        console.error("Error", error);
      });
  };

  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    //add Task
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) => {
    Alert.alert(
      "Alert !!!",
      "Do you want to delete this task?",
      [
        {
          text: "OK",
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index, 1);
            setTaskList(taskListTmp);
          },
          style: "default"
        },
        {
          text: "CANCEL",
          cancelable: true,
          onDismiss: () => { console.log("cancel") },
        }
      ]
    );
  };

  return (

    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) => {
              return <Task key={index} title={item} number={index + 1} onDeleteTask={() => handleDeleteTask(index)} />;
            })
          }
        </ScrollView>
      </View >

      <Form onAddTask={handleAddTask} />
    </View >
  );
}


