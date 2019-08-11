import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { Card, CardSection, Button } from "../common";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import Input from "../common/Input";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";

class HomeCard extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          width: widthPercentageToDP("100"),
          justifyContent: "space-around",
          borderBottomColor: "#f3f3f3",
          borderBottomWidth: 1
        }}
        onPress={this.props.onPress}
      >
        <View
          style={{
            width: "22%",
            height: 100,
            paddingTop: heightPercentageToDP("2"),
            paddingBottom: heightPercentageToDP("2"),
            paddingLeft: widthPercentageToDP("2"),
            paddingRight: widthPercentageToDP("2"),
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 60,
              marginTop: 0
            }}
            source={this.props.ProfileImage}
          />
        </View>
        <View
          style={{
            width: widthPercentageToDP("78"),
            paddingTop: heightPercentageToDP("2"),
            paddingLeft: 5
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", color: "#000000" }}>
              {this.props.Name}
            </Text>
            <Text style={{ fontSize: 8, marginTop: 5, marginLeft: 1 }}>
              {this.props.Email}
            </Text>
            <Text style={{ fontSize: 8, marginTop: 5, marginLeft: 10 }}>
              {this.props.time}
            </Text>
          </View>
          <Text>{this.props.Text}</Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 5
              }}
            >
              <Icon
                name={this.props.Icon1}
                size={20}
                style={{}}
                activeTintColor="tomato"
              />
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  color: "#000000",
                  marginTop: 2
                }}
              >
                {this.props.Quantity}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 5
              }}
            >
              <Icon
                name={this.props.Icon2}
                size={20}
                style={{}}
                activeTintColor="tomato"
              />
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  color: "#000000",
                  marginTop: 2
                }}
              >
                {this.props.Quantity}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 5
              }}
            >
              <Icon
                name={this.props.Icon3}
                size={20}
                style={{}}
                activeTintColor="tomato"
              />
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  color: "#000000",
                  marginTop: 2
                }}
              >
                {this.props.Quantity}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default HomeCard;
