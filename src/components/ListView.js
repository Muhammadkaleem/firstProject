import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { CardSection } from "../common";
import Detail from "./Detail";

class ListView extends Component {
  constructor(props) {
    super(props);
  }
  onPress = () => {
    if (this.props.item.id === "1") {
      <Detail Text="this is detail text" />;
    }
  };
  render() {
    const { ViewStyle } = styles;
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: "#fff",
            justifyContent: "flex-start",
            flexDirection: "row",
            borderColor: "tomato",
            position: "relative"
          }}
          onPress={this.props.onPress}
        >
          <View style={ViewStyle}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 60,
                marginTop: 0
              }}
              source={require("../image.jpg")}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: "#000000", marginBottom: 5 }}>
                Status : Pending
              </Text>
              <Text style={{ color: "#000000", marginBottom: 5 }}>
                Reward : $5
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ListView;
const styles = {
  ViewStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 0,
    marginRight: 5,
    borderLeftColor: "tomato",
    borderLeftWidth: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingLeft: 10,
    flexDirection: "row"
  }
};
