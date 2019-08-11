import React from "react";
import { TouchableOpacity } from "react-native";

const CardSection = props => {
  return (
    <TouchableOpacity style={styles.containerStyle}>
      {props.children}
    </TouchableOpacity>
  );
};
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "tomato",
    position: "relative"
  }
};
export { CardSection };
