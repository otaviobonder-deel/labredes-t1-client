import React from 'react';
import {Button} from 'react-native-elements';
import {View} from 'react-native';
import {useHistory} from 'react-router-native';

export default function Home() {
  const history = useHistory();

  return (
    <View style={{alignItems: 'center'}}>
      <Button title="Iniciar jogo" onPress={() => history.push('/start')} />
    </View>
  );
}
