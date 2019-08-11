import React, { Component } from "react";
import { View, Text } from "react-native";
import { CardSection } from "../common";

class TimeTable extends Component {
  render() {
    return (
      <CardSection>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              alignSelf: "center",
              marginLeft: 30,
              fontWeight: "bold",
              marginRight: 90
            }}
          >
            {this.props.Day}
          </Text>
          <Text
            style={{
              alignSelf: "center",
              marginLeft: 30,
              fontWeight: "bold"
            }}
          >
            {this.props.time} : {this.props.toTime}
          </Text>
        </View>
      </CardSection>
    );
  }
}

export default TimeTable;
