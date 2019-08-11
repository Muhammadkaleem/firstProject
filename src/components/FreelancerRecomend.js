import React, { Component } from "react";
import { View, Text } from "react-native";
import { CardSection, Button } from "../common";
import Input from "../common/Input";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/AntDesign";
import TextInputArea from "../common/TextInputArea";

class FreelancerRecomend extends Component {
  render() {
    const { containerStyle, containerStyle1 } = styles;
    return (
      <View>
        <View style={containerStyle}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              alignSelf: "center"
            }}
          >
            Status
          </Text>
        </View>

        <View style={containerStyle1}>
          <Text style={{ fontWeight: "bold", fontSize: 12, marginBottom: 5 }}>
            Client Name
          </Text>
          <Input placeholder="Full Name" IconName="md-people" />
          <Text style={{ fontWeight: "bold", fontSize: 12, marginBottom: 5 }}>
            Phone Number
          </Text>
          <Input placeholder="Phone Number" IconName="md-call" />
          <Text style={{ fontWeight: "bold", fontSize: 12, marginBottom: 5 }}>
            Email
          </Text>
          <Input placeholder="Email" IconName="md-mail" />
        </View>
        <View style={containerStyle}>
          <TextInputArea placeholder="Secedule " />
        </View>
        <Button
          style={{
            width: widthPercentageToDP("60"),
            backgroundColor: "tomato",
            alignSelf: "center",
            marginTop: 10,
            height: heightPercentageToDP("6"),
            justifyContent: "center"
          }}
          onPress={() => this.props.navigation.navigate("Avalability")}
          Text="NEXT"
          TextStyle={{ alignSelf: "center", color: "white" }}
        />
      </View>
    );
  }
}

export default FreelancerRecomend;

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "tomato",
    position: "relative",
    marginTop: 5,
    alignItems: "center",
    marginLeft: 5
  },
  containerStyle1: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    borderColor: "tomato",
    position: "relative",
    marginTop: 5,
    alignItems: "center",
    marginLeft: 5
  }
};
