import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "../common";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
class QR extends Component {
  render() {
    return (
      <View>
        <Button
          style={{
            height: heightPercentageToDP("7"),
            width: widthPercentageToDP("80"),
            // backgroundColor: "none",
            borderRadius: 2,
            borderWidth: 1,
            borderColor: "tomato",
            marginTop: 10,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            padding: 3
          }}
          Text="10% Discount"
          TextStyle={{ fontSize: 16, color: "black" }}
          onPress={() => this.props.navigation.navigate("QR")}
        />
        <Image
          style={{
            height: heightPercentageToDP("60"),
            width: widthPercentageToDP("90"),
            backgroundColor: "#f3f3f3",
            alignSelf: "center",
            marginTop: 10
          }}
        />
        <Button
          style={{
            height: heightPercentageToDP("7"),
            width: widthPercentageToDP("80"),
            backgroundColor: "tomato",
            borderRadius: 2,
            borderWidth: 1,
            borderColor: "tomato",
            marginTop: 10,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            padding: 3
          }}
          Text="QR code"
          TextStyle={{ fontSize: 16, color: "white" }}
          onPress={() => this.props.navigation.navigate("QR")}
        />
      </View>
    );
  }
}

export default QR;
