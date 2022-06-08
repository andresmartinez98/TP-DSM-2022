import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
      position: "absolute",
      bottom: 5,
      alignSelf: "center",
  },
};

export default Button;