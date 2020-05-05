import React, {useEffect, useState} from 'react';
import socket from '../../service/socket';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

export default function Start() {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const data = 'New connection!';
    socket.send(data, 0, data.length, 41234, 'localhost', function (err) {
      if (err) {
        setQuestions(err);
      }
    });
  }, []);

  if (!questions) {
    return <View />;
  }

  return (
    <View>
      <Text>{questions}</Text>
    </View>
  );
}
