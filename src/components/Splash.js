import React, { Component } from "react";
import { View, Text } from "react-native";

class Splash extends Component {
  render() {
    return (
      <View>
        <Text onPress={() => this.props.navigation.navigate("WelcomeScreen")}>
          this is Splash screen
        </Text>
      </View>
    );
  }
}

export default Splash;
