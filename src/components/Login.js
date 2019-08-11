import React, { Component } from "react";
import { View, Text } from "react-native";

class Login extends Component {
  render() {
    return (
      <View>
        <Text onPress={() => this.props.navigation.navigate("Home")}>
          this is login
        </Text>
      </View>
    );
  }
}

export default Login;
