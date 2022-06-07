import React, { useEffect } from "react";
import { View, Image, Text, ScrollView, Linking } from "react-native";
import Button from "./Button";

const ViewImage = (props) => {
  //   useEffect(() => {
  //     console.log(props);
  //   }, []);

  const { imageStyle, container, headerTextStyle } = styles;
  const { imageUrl, title } = props.route.params;
  return (
    <View style={container}>
      <Image
        style={imageStyle}
        resizeMode="contain"
        source={{
          uri: imageUrl,
        }}
      />
      {/* <Button onPress={() => Linking.openURL(imageUrl)}>See Now!</Button> */}

      <Text style={headerTextStyle} numberOfLines={1}>
        {title}
      </Text>
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
  headerTextStyle: {
    position: "absolute",
    bottom: 5,
    alignSelf: "center",
    fontSize: 18,
    color: "#fff",
  },
};
export default ViewImage;
