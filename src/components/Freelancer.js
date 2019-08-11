import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import ListView from "./ListView";
import HomeCard from "../common/HomeCard";
import { CardSection } from "../common";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

class Freelancer extends Component {
  render() {
    const { containerStyle, containerStyle1 } = styles;

    return (
      <ScrollView>
        <HomeCard
          Text="List View"
          onPress={() => this.props.navigation.navigate("HairCut")}
        />
        <HomeCard
          Text="List View"
          onPress={() => this.props.navigation.navigate("HairCut")}
        />
        <HomeCard
          Text="List View"
          onPress={() => this.props.navigation.navigate("HairCut")}
        />
        <HomeCard
          Text="List View"
          onPress={() => this.props.navigation.navigate("HairCut")}
        />
        <HomeCard
          Text="List View"
          onPress={() => this.props.navigation.navigate("HairCut")}
        />
        <HomeCard
          Text="List View"
          onPress={() => this.props.navigation.navigate("HairCut")}
        />
      </ScrollView>
    );
  }
}

export default Freelancer;
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
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
