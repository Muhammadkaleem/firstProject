import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import {
  Header,
  Button,
  StyleProvider,
  Container,
  Tab,
  Tabs
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";
import HomeCard from "../common/HomeCard";

class Home extends Component {
  static navigationOptions = {
    drawerLabel: "Logout",
    drawerIcon: ({ tintColor }) => (
      <Icon
        style={{ paddingLeft: 10 }}
        onPress={() => navigation.openDrawer()}
        name="md-menu"
        size={30}
      />
    )
  };
  render() {
    return (
      <View>
        {/* <View
          style={{
            flexDirection: "row",
            width: widthPercentageToDP("80"),
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            marginTop: 5,
            marginBottom: 5
          }}
        >
          <View
            style={{
              width: widthPercentageToDP("35"),
              marginRight: heightPercentageToDP("0.1")
            }}
          >
            <Content>
              <Button Dark>
                <Text>this is button</Text>
              </Button>
            </Content>
          </View>
          <View style={{ width: widthPercentageToDP("35") }}>
            <Button small>
              <Text>this is button</Text>
            </Button>
          </View>
        </View> */}

        <ScrollView>
          <HomeCard
            Name="Robbort D. Junoir"
            Icon1="md-heart"
            Icon2="md-heart"
            Icon3="md-heart"
            Quantity="32"
            Email="@RealRobberJ43"
            time=".6h"
            Text="pakistan is our homeland this the most butiful contery"
            ProfileImage={require("../image.jpg")}
          />
          <HomeCard
            Name="Robbort D. Junoir"
            Icon1="md-heart"
            Icon2="md-heart"
            Icon3="md-heart"
            Quantity="32"
            Email="@RealRobberJ43"
            time=".6h"
            Text="pakistan is our homeland this the most butiful contery"
            ProfileImage={require("../image.jpg")}
          />
          <HomeCard
            Name="Robbort D. Junoir"
            Icon1="md-heart"
            Icon2="md-heart"
            Icon3="md-heart"
            Quantity="32"
            Email="@RealRobberJ43"
            time=".6h"
            Text="pakistan is our homeland this the most butiful contery"
            ProfileImage={require("../image.jpg")}
          />
          <HomeCard
            Name="Robbort D. Junoir"
            Icon1="md-heart"
            Icon2="md-heart"
            Icon3="md-heart"
            Quantity="32"
            Email="@RealRobberJ43"
            time=".6h"
            Text="pakistan is our homeland this the most butiful contery"
            ProfileImage={require("../image.jpg")}
          />
          <HomeCard
            Name="Robbort D. Junoir"
            Icon1="md-heart"
            Icon2="md-heart"
            Icon3="md-heart"
            Quantity="32"
            Email="@RealRobberJ43"
            time=".6h"
            Text="pakistan is our homeland this the most butiful contery"
            ProfileImage={require("../image.jpg")}
          />
          <HomeCard
            Name="Robbort D. Junoir"
            Icon1="md-heart"
            Icon2="md-heart"
            Icon3="md-heart"
            Quantity="32"
            Email="@RealRobberJ43"
            time=".6h"
            Text="pakistan is our homeland this the most butiful contery"
            ProfileImage={require("../image.jpg")}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Home;
