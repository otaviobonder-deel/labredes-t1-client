import React, {useState} from 'react';
import {View} from 'react-native';
import {useHistory} from 'react-router-native';
import {Text} from 'react-native-elements';

export default function Questions({}) {
  const history = useHistory();
  const [questions, useQuestions] = useState({
    questions: history.location.state,
    answer: {},
    currentQuestion: 1,
  });

  console.log(questions);

  return (
    <View>
      <Text>{questions.questions[questions.currentQuestion].description}</Text>
    </View>
  );
}
