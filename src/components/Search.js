import React, { Component } from "react";
import { View } from "react-native";
import Input from "../common/Input";
import { Header } from "../common";

class Search extends Component {
  render() {
    return (
      <View>
        {/* <Header
          HeaderText="Search Connection"
          onPress={() => this.props.navigation.openDrawer()}
        /> */}
        <Input placeholder="Search here" IconName="md-search" />
      </View>
    );
  }
}

export default Search;
