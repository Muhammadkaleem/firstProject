import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card, CardSection } from "../common";

export class Detail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("this is detail Screen props", this.props);
    return (
      <View>
        <Card>
          <CardSection>
            <Text>{this.props.Text}</Text>
          </CardSection>
          <CardSection>
            <Text>
              numberOfLines Let Start with Programing Let Start with
              ProgramingnumberOfLines Let Start with Programing Let Start with
              ProgramingnumberOfLines Let Start with Programing Let Start with
              Programing
              {this.props.Description}
            </Text>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default Detail;
