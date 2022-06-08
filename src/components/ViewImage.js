import React from "react";
import { View, Image, Text, Linking } from "react-native";
import Button from "./Button";

const ViewImage = (props) => {
  const { imageStyle, container, headerTextStyle } = styles;
  const { imageUrl, title } = props.route.params;
  return (
    <View style={container}>
      <Image
        style={imageStyle}
        resizeMode="contain"
        source={{ uri: imageUrl }}
      />
      <Button style={headerTextStyle} onPress={() => Linking.openURL(imageUrl)}>
        {title}
      </Button>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageStyle: {
    flex: 1,
  },
};
export default ViewImage;