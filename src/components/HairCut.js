import React, { Component } from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import {
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native-gesture-handler";
import { Icon } from "native-base";
import TouchableButton from "./TouchableButton";
import { Button } from "../common";
import TextInputArea from "../common/TextInputArea";
import MapView from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
class HairCut extends Component {
  render() {
    return (
      <View>
        <Button
          style={{
            // height: heightPercentageToDP("4"),
            // width: widthPercentageToDP("15"),
            backgroundColor: "#f3f3f3",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "tomato",
            marginTop: 5,
            alignSelf: "flex-end",
            marginRight: 5,
            justifyContent: "center",
            alignItems: "center",
            padding: 3
          }}
          Text="QR code"
          TextStyle={{ fontSize: 16 }}
          onPress={() => this.props.navigation.navigate("QR")}
        />
        <ScrollView>
          <ImageBackground
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
            }}
            style={{
              marginTop: 10,
              width: widthPercentageToDP("100"),
              height: heightPercentageToDP("25")
            }}
          />

          <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
            <TextInputArea placeholder="Services Infor" />
          </View>
          <View
            style={{
              marginTop: 10,
              marginLeft: 0,
              width: widthPercentageToDP("80")
            }}
          >
            <TouchableButton
              BoxStyle={{
                backgroundColor: "red",
                height: heightPercentageToDP("5"),
                width: widthPercentageToDP("10"),
                borderRadius: 5,
                marginRight: 10,
                marginLeft: 10
              }}
              Text="Info"
            />
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
          {/* <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            height: 120,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#ddd",
            borderBottomWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 1,
            marginBottom: 5,
            paddingLeft: 10,
            marginTop: 10,
            borderTopWidth: 1,
            marginLeft: 20,
            marginRight: 20
          }}
        >
          <TextInput
            secureTextEntry={this.props.secureTextEntry}
            placeholder={this.props.placeholder}
            style={{
              height: 120,
              width: widthPercentageToDP("70"),
              borderRadius: 10,
              fontSize: 14,
              borderWidth: 0,
              borderColor: "tomato",
              position: "relative"
            }}
          />
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "flex-end",
              height: 50,
              width: 50,
              backgroundColor: "tomato",
              marginRight: 20,
              borderRadius: 50,
              marginTop: 50
            }}
          >
            <Icon
              name="md-add"
              size={20}
              onPress={() =>
                this.props.navigation.navigate("FreelancerRecomend")
              }
            />
          </TouchableOpacity>
        </View> */}
          <View>
            <MapView
              // remove if not using Google Maps
              style={{
                height: 150,
                width: widthPercentageToDP("95"),
                alignSelf: "center",
                marginTop: 10
              }}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
              }}
            />
            {/* <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "flex-end",
                height: 50,
                width: 50,
                backgroundColor: "tomato",
                marginRight: 20,
                borderRadius: 50,
                marginBottom: 20
              }}
            >
              <Icon
                name="md-add"
                size={20}
                onPress={() =>
                  this.props.navigation.navigate("FreelancerRecomend")
                }
              />
            </TouchableOpacity> */}
            <Button
              style={{
                height: heightPercentageToDP("6"),
                width: widthPercentageToDP("50"),
                borderWidth: 1,
                alignSelf: "center",
                marginBottom: 10,
                borderRadius: 2,
                justifyContent: "center",
                marginTop: 5,
                borderColor: "tomato",
                marginBottom: 50
              }}
              onPress={() =>
                this.props.navigation.navigate("FreelancerRecomend")
              }
              Text="ADD"
              TextStyle={{ alignSelf: "center", color: "#000000" }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: 40,
    justifyContent: "center",

    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export default HairCut;
