import React, { Component } from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { Card, CardSection, Button } from "../common";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import Input from "../common/Input";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";
class WelcomeScreen extends Component {
  render() {
    const { container } = styles;
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10%"
        }}
      >
        <Image
          style={{ width: 150, height: 150 }}
          source={{
            uri:
              "https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png"
          }}
        />
        <KeyboardAvoidingView behavior="padding" enabled>
          <Input placeholder="Email" IconName="md-mail" />
          <Input placeholder="Password" IconName="md-lock" secureTextEntry />
          <Text style={{ marginLeft: 10 }}>Forget Password</Text>
          <Button
            Text="Login"
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
            onPress={() => this.props.navigation.navigate("Dashboard")}
            TextStyle={{ color: "white", fontSize: 19 }}
          />
        </KeyboardAvoidingView>

        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <Text>New user?</Text>
          <Text
            style={{ color: "tomato", marginLeft: 2 }}
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            Sign up with email
          </Text>
        </View>
      </View>
    );
  }
}

export default WelcomeScreen;
const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
};
