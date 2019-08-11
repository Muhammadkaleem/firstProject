import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Header, Button } from "../common";
import MapView from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import Input from "../common/Input";
import Icon from "react-native-vector-icons/Ionicons";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";
// import { GoogleMaps } from "simple-react-google-maps";
import { TouchableOpacity } from "react-native-gesture-handler";

class Location extends Component {
  render() {
    const {
      textStyle,
      viewStyle,
      ButtonStyle,
      onButtonPress,
      ButtonText
    } = styles;
    return (
      <View>
        <View style={viewStyle}>
          <Icon
            name="md-arrow-back"
            size={27}
            style={{ alignSelf: "flex-start", paddingLeft: 10 }}
            activeTintColor="tomato"
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={textStyle}>Location</Text>
        </View>
        <View>
          <View
            style={{
              width: widthPercentageToDP("80"),
              alignSelf: "center",
              marginTop: 10
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#ddd",
                  borderBottomWidth: 0,
                  shadowColor: "#000",
                  shadowOffset: { width: 10, height: 10 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  elevation: 1,
                  paddingLeft: 10,
                  borderRadius: 10
                }}
              >
                <Icon
                  name={this.props.IconName}
                  size={22}
                  style={{ marginRight: 10 }}
                  activeTintColor="tomato"
                />
                <TextInput
                  placeholder={"Search here"}
                  style={{
                    height: 40,
                    width: widthPercentageToDP("70"),
                    borderRadius: 10,
                    fontSize: 14,
                    borderWidth: 0,
                    borderColor: "tomato",
                    position: "relative"
                  }}
                />
              </View>
            </View>
          </View>
          <MapView
            // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          />
        </View>
      </View>
    );
  }
}

export default Location;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: heightPercentageToDP("900"),
    flex: 1,
    justifyContent: "center",

    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: heightPercentageToDP("88")
  },
  textStyle: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: 60,
    color: "#000000"
  },
  viewStyle: {
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    height: 60,
    paddingTop: 15,
    shadowColor: "#0000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.8,
    elevation: 2,
    position: "relative"
  }
});
