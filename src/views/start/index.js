import React, {useEffect} from 'react';
import {sendMessage, bin2String} from '../../service/socket';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {useHistory} from 'react-router-native';
import socket from '../../service/socket';
import LottieView from 'lottie-react-native';

export default function Start() {
  const history = useHistory();

  useEffect(() => {
    socket.on('message', (msg) => {
      const obj = bin2String(msg);
      const message = JSON.parse(obj);

      if (message.req === 'questions') {
        sendMessage('ack');
        history.push('/questions', message.res);
      }
    });
    //eslint-disable-next-line
  }, []);

  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
      <LottieView
        source={require('../../assets/gameStart.json')}
        loop
        autoPlay
        style={{width: 256, height: 256}}
      />
      <Text style={{textAlign: 'center', margin: 20}}>
        Serão exibidas 4 perguntas e cada pergunta possui 4 alternativas. Cada
        resposta correta equivale a 50 pontos. Veja ao final do jogo sua
        pontuação!
      </Text>
      <Button
        title="Comecar"
        onPress={() => sendMessage('questions')}
        style={{margin: 20, width: 256}}
      />
      <Button
        title="Voltar"
        onPress={() => history.push('/')}
        style={{margin: 20, width: 256}}
      />
    </View>
  );
}
