import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, Header } from "../common";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import TouchableButton from "./TouchableButton";

class YelpReview extends Component {
  render() {
    return (
      <View>
        <Header
          HeaderText="Payment"
          onPress={() => this.props.navigation.openDrawer()}
        />
        <Text
          style={{
            fontSize: 45,
            fontWeight: "bold",
            alignSelf: "center",
            marginTop: 40
          }}
        >
          $100.87
        </Text>
        <View style={{ marginTop: 40, marginBottom: 10 }}>
          <TouchableButton
            BoxStyle={{
              backgroundColor: "",
              height: heightPercentageToDP("5"),
              width: widthPercentageToDP("10"),
              borderRadius: 5,
              marginRight: 10,
              marginLeft: 0
            }}
            Text="Card 1"
          />
          <TouchableButton
            BoxStyle={{
              backgroundColor: "",
              height: heightPercentageToDP("5"),
              width: widthPercentageToDP("10"),
              borderRadius: 5,
              marginRight: 10,
              marginLeft: 0
            }}
            Text="Card 2"
          />
          <TouchableButton
            BoxStyle={{
              backgroundColor: "",
              height: heightPercentageToDP("5"),
              width: widthPercentageToDP("10"),
              borderRadius: 5,
              marginRight: 10,
              marginLeft: 0
            }}
            Text="Card 3"
          />
        </View>
        <Button
          style={{
            width: widthPercentageToDP("80"),
            alignSelf: "center",
            height: 40,
            borderRadius: 3,
            backgroundColor: "tomato",
            alignItems: "center",
            justifyContent: "center"
          }}
          Text="Checkout"
          TextStyle={{ color: "white" }}
        />
      </View>
    );
  }
}

export default YelpReview;
