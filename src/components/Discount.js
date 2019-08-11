import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Header } from "../common";
import HomeCard from "../common/HomeCard";

class Discount extends Component {
  render() {
    return (
      <View>
        <Header
          HeaderText="Histories"
          onPress={() => this.props.navigation.openDrawer()}
          HeaderText="My Discount"
        />

        <ScrollView>
          <View style={{ marginTop: 20 }}>
            <HomeCard
              Name="Robbort D. Junoir"
              Email="@RealRobberJ43"
              time=".6h"
              Text="Status : Pending "
              ProfileImage={require("../image.jpg")}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <HomeCard
              Name="Robbort D. Junoir"
              Email="@RealRobberJ43"
              time=".6h"
              Text="Status : Pending "
              ProfileImage={require("../image.jpg")}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <HomeCard
              Name="Robbort D. Junoir"
              Email="@RealRobberJ43"
              time=".6h"
              Text="Status : Pending "
              ProfileImage={require("../image.jpg")}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Discount;
