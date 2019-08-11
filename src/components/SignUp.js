import React, { Component } from "react";
import { View, Text } from "react-native";
import Input from "../common/Input";
import { Card, CardSection, Button } from "../common";

import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";

class SignUp extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 40,
            marginBottom: 40,
            fontWeight: "bold",
            fontSize: 30
          }}
        >
          Sign Up
        </Text>
        <View style={{ width: widthPercentageToDP("80"), alignSelf: "center" }}>
          <Input placeholder="Full Name" IconName="md-people" />
          <Input placeholder="Email" IconName="md-mail" />
          <Input placeholder="Password" IconName="md-lock" />
          <Input placeholder="Re-enter Password" IconName="md-lock" />
          <View>
            <Button
              Text="Sign up"
              style={{
                alignSelf: "center",
                marginTop: heightPercentageToDP("2"),
                width: widthPercentageToDP("70"),
                borderWidth: 1,
                borderColor: "tomato",
                backgroundColor: "tomato",
                alignItems: "center",
                justifyContent: "center",
                height: heightPercentageToDP("6"),
                borderRadius: 2
              }}
              onPress={() => this.props.navigation.goBack()}
              TextStyle={{ color: "white", fontSize: 19 }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default SignUp;
