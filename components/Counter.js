import React from 'react';
import {Button, Text, View} from 'react-native';
import HelloMessage from './HelloMessage'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {numOfClicks: 0};
  }

  onClick() {
    this.setState((prevState) => ({
      numOfClicks: prevState.numOfClicks + 1
    }));
  }

  render() {
    return (
      <View>
        <HelloMessage name="Goku" />
        <HelloMessage name="Vegeta" />
        <Text>Number of clicks: {this.state.numOfClicks}</Text>
        <Button onPress={(this.onClick).bind(this)} title="Click me!"/>
      </View>
    );
  }
}

export default Counter;
