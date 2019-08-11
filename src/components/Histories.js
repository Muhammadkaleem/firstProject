import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card, CardSection, Button, Header } from "../common";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";

class Histories extends Component {
  render() {
    return (
      <View>
        <Header
          HeaderText="My History"
          onPress={() => this.props.navigation.openDrawer()}
        />
        <ScrollView
          style={{
            marginTop: 0,
            height: heightPercentageToDP("100"),
            marginBottom: 0
          }}
        >
          <CardSection style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginTop: 5,
                marginLeft: 10,
                marginBottom: 5
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 30,
                fontWeight: "bold"
              }}
            >
              joney Baristo
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginTop: 5,
                marginLeft: 10,
                marginBottom: 5
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 30,
                fontWeight: "bold"
              }}
            >
              joney Baristo
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginTop: 5,
                marginLeft: 10,
                marginBottom: 5
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 30,
                fontWeight: "bold"
              }}
            >
              joney Baristo
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginTop: 5,
                marginLeft: 10,
                marginBottom: 5
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 30,
                fontWeight: "bold"
              }}
            >
              joney Baristo
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginTop: 5,
                marginLeft: 10,
                marginBottom: 5
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 30,
                fontWeight: "bold"
              }}
            >
              joney Baristo
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginTop: 5,
                marginLeft: 10,
                marginBottom: 5
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 30,
                fontWeight: "bold"
              }}
            >
              joney Baristo
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginTop: 5,
                marginLeft: 10,
                marginBottom: 5
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 30,
                fontWeight: "bold"
              }}
            >
              joney Baristo
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginTop: 5,
                marginLeft: 10,
                marginBottom: 5
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 30,
                fontWeight: "bold"
              }}
            >
              joney Baristo
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginTop: 5,
                marginLeft: 10,
                marginBottom: 5
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 30,
                fontWeight: "bold"
              }}
            >
              joney Baristo
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginTop: 5,
                marginLeft: 10,
                marginBottom: 5
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 30,
                fontWeight: "bold"
              }}
            >
              joney Baristo
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginTop: 5,
                marginLeft: 10,
                marginBottom: 5
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 30,
                fontWeight: "bold"
              }}
            >
              joney Baristo
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginTop: 5,
                marginLeft: 10,
                marginBottom: 5
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 30,
                fontWeight: "bold"
              }}
            >
              joney Baristo
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginTop: 5,
                marginLeft: 10,
                marginBottom: 5
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 30,
                fontWeight: "bold"
              }}
            >
              joney Baristo
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginTop: 5,
                marginLeft: 10,
                marginBottom: 5
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL43mSCo0MAu3fCgV8t6QRsNzyiatE_Har4TjE8M6NZ-i0tKDzA"
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 30,
                fontWeight: "bold"
              }}
            >
              joney Baristo
            </Text>
          </CardSection>
        </ScrollView>
      </View>
    );
  }
}

export default Histories;
