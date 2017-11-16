/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from "react-native";
import { validateMe } from "./util/validate";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      weather: "weather",
      temperature: "temperature"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 40,
            width: 200,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={text => this.setState({ weather: text })}
          value={this.state.weather}
        />
        <TextInput
          style={{
            height: 40,
            width: 200,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={text => this.setState({ temperature: text })}
          value={this.state.temperature}
        />
        <Button
          onPress={() =>
            this.setState({
              result: validateMe(this.state.weather, this.state.temperature)
            })
          }
          title="Should I eat ice cream?"
        />
        <Text>{this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
