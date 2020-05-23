import React from 'react';
import {BackButton, NativeRouter, Switch, Route} from 'react-router-native';
import Home from './views/home';
import {View} from 'react-native';
import Start from './views/start';
import Questions from './views/questions';

export default function Routes() {
  return (
    <NativeRouter>
      <BackButton>
        <View>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/start">
              <Start />
            </Route>
            <Route exact path="/questions">
              <Questions />
            </Route>
          </Switch>
        </View>
      </BackButton>
    </NativeRouter>
  );
}
