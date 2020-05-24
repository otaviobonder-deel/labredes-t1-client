import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useHistory} from 'react-router-native';
import {Text} from 'react-native-elements';

export default function Questions({}) {
  const history = useHistory();
  const [questions, useQuestions] = useState(history.location.state);
  const [answers, setAnswers] = useState([]);
  const [playerAnswers, setPlayerAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextAnswer = playerAnswer => {
    if (currentQuestion >= questions.length) return;
    const player = playerAnswers;
    player.push(playerAnswer);
    let question = currentQuestion;
    question++;
    setCurrentQuestion(question);
    setPlayerAnswers(player);
  };

  const renderQuestions = () => {
    return (
      <View>
      <Text
        style={{
          display: 'flex',
          textAlign: 'center'
        }}
      >{questions[currentQuestion].description}</Text>
      <View>
        {Object.keys(questions[currentQuestion].alternatives).map(key => (
          <TouchableOpacity
            key={key}
            style={{
              margin: 20,
              backgroundColor: 'blue',
              padding: 10,
              display: 'flex',
              alignItems: 'center'
            }}
            onPress={() => nextAnswer(key)}
          ><Text style={{
            color: 'white'
          }}>{key} : {questions[currentQuestion].alternatives[key]}</Text></TouchableOpacity>
        ))}
      </View>
    </View>
    );
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].correct_answer === playerAnswers[i]) {
        score += 50;
      };
    }

    return score;
  };

  const renderFinal = () => (
    <View>
      <Text
        style={{
          display: 'flex',
          textAlign: 'center'
        }}
      >
        Parabéns! Esta foi sua pontuação:
      </Text>
      <Text
        style={{
          display: 'flex',
          textAlign: 'center'
        }}
      >
        {calculateScore()}
      </Text>
      <TouchableOpacity
        style={{
          margin: 20,
          backgroundColor: 'blue',
          padding: 10,
          display: 'flex',
          alignItems: 'center'
        }}
        onPress={() => history.push('/start')}
      >
        <Text
          style={{
            color: 'white'
          }}
        >Jogar Novamente</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <>
      {currentQuestion < questions.length ? renderQuestions() : renderFinal()}
    </>
  );
}
