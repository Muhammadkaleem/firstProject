import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SignUp from "./src/components/SignUp";
import Profile from "./src/components/Profile";
import Splash from "./src/components/Splash";
import Recomendation from "./src/components/Recomendation";
import HairCut from "./src/components/HairCut";
import Histories from "./src/components/Histories";
import Avalability from "./src/components/Avalability";
import FindConnection from "./src/components/FindConnection";
import Discount from "./src/components/Discount";
import Search from "./src/components/Search";
import Photo from "./src/components/Photo";
import Location from "./src/components/Location";
import YelpReview from "./src/components/YelpReview";
import Payment from "./src/components/Payment";
/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import Home from "./src/components/Home";
import Login from "./src/components/Login";
import Offers from "./src/components/Offers";
import Freelancer from "./src/components/Freelancer";
import WelcomeScreen from "./src/components/WelcomeScreen";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";
import FreelancerRecomend from "./src/components/FreelancerRecomend";
import FreelanceProfile from "./src/components/FreelanceProfile";
import Input from "./src/common/Input";
import { TextInput } from "react-native-gesture-handler";
import QR from "./src/components/QR";
console.disableYellowBox = true;
class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;

class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}
const FreelancerStack = createStackNavigator(
  {
    Freelancer: {
      screen: Freelancer
    },
    HairCut: {
      screen: HairCut
    },

    QR: {
      screen: QR
    },
    FreelancerRecomend: {
      screen: FreelancerRecomend
    },
    Avalability: {
      screen: Avalability
    }
  },
  {
    headerMode: "none"
  }
);
const OfferTopTabs = createMaterialTopTabNavigator(
  {
    All: {
      screen: Offers,
      navigationOptions: {
        tabBarIcon: ({ activeTintColor }) => {
          return (
            <Icon
              name="md-pricetags"
              size={27}
              style={{}}
              activeTintColor="tomato"
            />
          );
        }
      }
    },
    Pending: {
      screen: Offers
    },
    Accept: {
      screen: Offers
    },
    Payed: {
      screen: Offers
    }
  },
  {
    defaultNavigationOptions: {
      activeTintColor: "tomato",

      tabBarOptions: {
        inactiveTintColor: "#96a8b0",
        activeTintColor: "#000000",
        indecatorColor: "red",
        indicatorStyle: {
          backgroundColor: "tomato"
        },

        style: {
          backgroundColor: "white"
        }
      }
    }
  }
);

const OfferStack = createStackNavigator(
  {
    Offers: {
      screen: OfferTopTabs
    },
    Recomendation: {
      screen: Recomendation
    }
  },
  {
    headerMode: "none"
  }
);

const HomeStack = createMaterialTopTabNavigator(
  {
    EVERYONE: {
      screen: Home
    },
    FOLLOWING: {
      screen: Home
    }
  },
  {
    defaultNavigationOptions: {
      activeTintColor: "tomato",

      tabBarOptions: {
        inactiveTintColor: "#96a8b0",
        activeTintColor: "#000000",
        indecatorColor: "red",
        indicatorStyle: {
          backgroundColor: "tomato"
        },

        style: {
          backgroundColor: "white"
        }
      }
    }
  }
);

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ activeTintColor }) => {
          return (
            <Icon
              name="md-home"
              size={27}
              style={{}}
              activeTintColor="tomato"
            />
          );
        }
      }
    },
    Freelancer: {
      screen: FreelancerStack,
      navigationOptions: {
        tabBarIcon: ({ activeTintColor }) => {
          return (
            <Icon
              name="md-swap"
              size={27}
              style={{}}
              activeTintColor="tomato"
            />
          );
        }
      }
    },
    Offers: {
      screen: OfferStack,
      navigationOptions: {
        tabBarIcon: ({ activeTintColor }) => {
          return (
            <Icon
              name="md-pricetags"
              size={27}
              style={{}}
              activeTintColor="tomato"
            />
          );
        }
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ TintColor }) => {
          activeTintColor = "tomato";
          return (
            <Icon
              name="md-people"
              size={27}
              style={{}}
              activeTintColor="tomato"
            />
          );
        }
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    },
    tabBarOptions: {
      activeTintColor: "tomato",
      style: {}
    }
  }
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
    Search: Search
  },

  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <View style={{ flexDirection: "row" }}>
            <Icon
              style={{ paddingLeft: 10, marginTop: 15 }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
            <View style={{ marginLeft: 15, marginTop: 10 }}>
              <TextInput
                style={{
                  height: 40,
                  width: widthPercentageToDP("70"),
                  backgroundColor: "#f2f2f2",
                  borderRadius: 20,
                  marginLeft: 20,
                  borderColor: "tomato",
                  marginBottom: 10,
                  borderWidth: 1,
                  borderBottomWidth: 0,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  elevation: 1
                }}
                placeholder="Search here"
              />
            </View>
          </View>
        )
      };
    }
  }
);

const FreelanceProfileStack = createStackNavigator(
  {
    FreelanceProfile: {
      screen: FreelanceProfile
    },
    Photo: {
      screen: Photo
    },
    YelpReview: {
      screen: YelpReview
    },
    Location: {
      screen: Location
    }
  },
  {
    headerMode: "none"
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: DashboardStackNavigator,
    navigationOptions: {
      drawerLabel: "Home",
      drawerIcon: ({ tintColor }) => <Icon name="md-home" size={24} />
    }
  },

  History: {
    screen: Histories,
    navigationOptions: {
      drawerLabel: "My History",
      drawerIcon: ({ tintColor }) => <Icon name="md-create" size={24} />
    }
  },
  Payment: {
    screen: YelpReview,
    navigationOptions: {
      drawerLabel: "Payment",
      drawerIcon: ({ tintColor }) => <Icon name="md-cash" size={24} />
    }
  },
  Discount: {
    screen: Discount,
    navigationOptions: {
      drawerLabel: "Discount",
      drawerIcon: ({ tintColor }) => (
        <View>
          <Icon name="md-cart" size={24} />
        </View>
      )
    }
  },
  FeeelancProfile: {
    screen: FreelanceProfileStack,
    navigationOptions: {
      drawerLabel: "My Freelance",
      drawerIcon: ({ tintColor }) => <Icon name="md-swap" size={24} />
    }
  }
});
const LoginStack = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    SignUp: { screen: SignUp }
  },
  {
    headerMode: "none"
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: LoginStack },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
