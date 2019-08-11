import React, { Component } from "react";
import { View, Text } from "react-native";
import TouchableButton from "./TouchableButton";

class Payment extends Component {
  render() {
    return (
      <View>
        <Payment
          HeaderText="Payment"
          onPress={() => this.props.navigation.openDrawer()}
        />
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>$100</Text>
          <Text>$100</Text>
        </View>
        <TouchableButton
          BoxStyle={{
            backgroundColor: "red",
            height: heightPercentageToDP("5"),
            width: widthPercentageToDP("10"),
            borderRadius: 5,
            marginRight: 10,
            marginLeft: 10
          }}
          Text="Reviews"
        />
      </View>
    );
  }
}

export default Payment;
