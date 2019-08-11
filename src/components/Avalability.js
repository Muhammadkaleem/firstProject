import React, { Component } from "react";
import { View, Text, Image, ScrollView, Picker } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import { CardSection, Button } from "../common";
import TimeTable from "./TimeTable";

class Avalability extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: "tomato",
            width: widthPercentageToDP("100"),
            height: heightPercentageToDP("3"),
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            height: 40
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            Hours
          </Text>
        </View>
        <ScrollView style={{ marginTop: 10, height: 200 }}>
          <TimeTable Day="Sunday" time="6: 10 am" toTime="7: 40 pm" />
          <TimeTable Day="Sunday" time="6: 10 am" toTime="7: 40 pm" />
          <TimeTable Day="Sunday" time="6: 10 am" toTime="7: 40 pm" />
          <TimeTable Day="Sunday" time="6: 10 am" toTime="7: 40 pm" />
          <TimeTable Day="Sunday" time="6: 10 am" toTime="7: 40 pm" />
          <TimeTable Day="Sunday" time="6: 10 am" toTime="7: 40 pm" />
          <TimeTable Day="Sunday" time="6: 10 am" toTime="7: 40 pm" />
          <TimeTable Day="Sunday" time="6: 10 am" toTime="7: 40 pm" />
          <TimeTable Day="Sunday" time="6: 10 am" toTime="7: 40 pm" />
          <TimeTable Day="Sunday" time="6: 10 am" toTime="7: 40 pm" />
          <TimeTable Day="Sunday" time="6: 10 am" toTime="7: 40 pm" />
          <TimeTable Day="Sunday" time="6: 10 am" toTime="7: 40 pm" />
        </ScrollView>
        <View
          style={{
            backgroundColor: "tomato",
            width: widthPercentageToDP("100"),
            height: heightPercentageToDP("3"),
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            height: 30
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            Secedule
          </Text>
        </View>
        <Picker>
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="tuesday" value="Tuseday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="tuesday" value="Tuseday" />
        </Picker>
        <Button
          style={{
            width: widthPercentageToDP("60"),
            backgroundColor: "tomato",
            alignSelf: "center",
            marginTop: 10,
            height: heightPercentageToDP("6"),
            justifyContent: "center",
            marginTop: 20
          }}
          onPress={() => this.props.navigation.navigate("Avalability")}
          Text="SUBMIT"
          TextStyle={{ alignSelf: "center", color: "white" }}
        />
      </View>
    );
  }
}

export default Avalability;
