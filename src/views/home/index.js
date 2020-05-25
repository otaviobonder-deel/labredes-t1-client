import React from 'react';
import {Button} from 'react-native-elements';
import {View} from 'react-native';
import {useHistory} from 'react-router-native';
import LottieView from 'lottie-react-native';

export default function Home() {
  const history = useHistory();

  return (
    <View
      style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
      <LottieView
        source={require('../../assets/game.json')}
        loop
        autoPlay
        style={{width: 256, height: 256}}
      />
      <Button
        title="Iniciar jogo"
        onPress={() => history.push('/start')}
        style={{width: 256}}
      />
    </View>
  );
}
