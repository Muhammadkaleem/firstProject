import React, { Component } from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { Card, CardSection, Button } from "../common";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";

class Input extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#ddd",
            borderBottomWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 1,
            marginBottom: 5,
            paddingLeft: 10
          }}
        >
          <Icon
            name={this.props.IconName}
            size={22}
            style={{ marginRight: 10 }}
            activeTintColor="tomato"
          />
          <TextInput
            secureTextEntry={this.props.secureTextEntry}
            placeholder={this.props.placeholder}
            style={{
              height: 40,
              width: widthPercentageToDP("70"),
              borderRadius: 10,
              fontSize: 14,
              borderWidth: 0,
              borderColor: "tomato",
              position: "relative"
            }}
          />
        </View>
      </View>
    );
  }
}

export default Input;
