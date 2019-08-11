import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Header = props => {
  const {
    textStyle,
    viewStyle,
    ButtonStyle,
    onButtonPress,
    ButtonText
  } = styles;

  return (
    <View style={viewStyle}>
      <Icon
        name="md-menu"
        size={27}
        style={{ alignSelf: "flex-start", paddingLeft: 10 }}
        activeTintColor="tomato"
        onPress={props.onPress}
      />
      <Text style={textStyle}>{props.HeaderText}</Text>
      <TouchableOpacity style={ButtonStyle} onPress={onButtonPress}>
        <Text>{ButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
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
};

export { Header };
