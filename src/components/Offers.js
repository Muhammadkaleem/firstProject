import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import flatListData from "./Data/flatListData";
import ListView from "./ListView";
import Detail from "./Detail";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

class Offers extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <ListView
            onPress={() => this.props.navigation.navigate("Recomendation")}
          />
          <ListView
            onPress={() => this.props.navigation.navigate("Recomendation")}
          />
          <ListView
            onPress={() => this.props.navigation.navigate("Recomendation")}
          />
          <ListView
            onPress={() => this.props.navigation.navigate("Recomendation")}
          />
          <ListView
            onPress={() => this.props.navigation.navigate("Recomendation")}
          />
          <ListView
            onPress={() => this.props.navigation.navigate("Recomendation")}
          />
          <ListView
            onPress={() => this.props.navigation.navigate("Recomendation")}
          />
          <ListView
            onPress={() => this.props.navigation.navigate("Recomendation")}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
export default Offers;
