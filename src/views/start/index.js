import React, {useEffect, useState} from 'react';
import {sendMessage, bin2String} from '../../service/socket';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {useHistory} from 'react-router-native';
import socket from '../../service/socket';

export default function Start() {
  const history = useHistory();

  useEffect(() => {
    socket.on('message', (msg) => {
      const obj = bin2String(msg);
      console.log(obj);
      const message = JSON.parse(obj);

      if (message.req === 'questions') {
        sendMessage('ack');
        history.push('/questions', message.res);
      }
    });
  }, []);

  return (
    <View>
      <Button title="Enviar Oi" onPress={() => sendMessage('questions')} />
      <Button title="Voltar" onPress={() => history.goBack()} />
    </View>
  );
}
