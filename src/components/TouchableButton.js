import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";

class TouchableButton extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          backgroundColor: "#black",
          marginTop: 0,
          borderRadius: 4,
          borderColor: "red",
          marginTop: 2
        }}
      >
        <TouchableOpacity
          style={{
            height: heightPercentageToDP("7"),
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
            borderWidth: 1,
            width: widthPercentageToDP("95"),
            borderRadius: 5,
            borderColor: "tomato"
          }}
        >
          <View style={this.props.BoxStyle} />
          <Text style={{ fontWeight: "bold", color: "#000000", width: 60 }}>
            {this.props.Text}
          </Text>
          <Icon
            style={{ paddingLeft: 10, marginLeft: widthPercentageToDP("50") }}
            name="md-arrow-forward"
            size={30}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default TouchableButton;
