

import React, { Component } from 'react';
import {ScreenStack} from "./Router";
import {StatusBar} from 'react-native';



StatusBar.setHidden(true);

export default class App extends Component<{}> {
  render() {
    return (
        <ScreenStack/>
    );
  }
}


