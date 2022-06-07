import React from "react";
import {
  Text,
  View,
  Image,
  Linking,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

import { LinearGradient } from "expo-linear-gradient";

const PhotoDetail = ({ navigation, title, imageUrl }) => {
  const { headerTextStyle, imageStyle, gradient, imageSection } = styles;

  return (
    <Card>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          navigation.navigate("viewImage", { imageUrl: imageUrl, title: title })
        }
      >
        <CardSection style={imageSection}>
          <ImageBackground
            borderRadius={15}
            style={imageStyle}
            source={{ uri: imageUrl }}
          >
            <LinearGradient
              // Background Linear Gradient
              colors={[
                "rgba(255, 255, 255, 0)",
                "rgba(255, 255, 255, 0)",
                "rgba(0, 0, 0, 0.2)",
                "rgba(0, 0, 0, 0.812)",
              ]}
              style={gradient}
            ></LinearGradient>
            <Text style={headerTextStyle} numberOfLines={1}>
              {title}
            </Text>
          </ImageBackground>
        </CardSection>
      </TouchableOpacity>
    </Card>
  );
};

const styles = {
  headerTextStyle: {
    position: "absolute",
    bottom: 5,
    alignSelf: "center",
    fontSize: 18,
    color: "#fff",
    marginHorizontal: 7,
  },

  imageSection: {
    borderRadius: 15,
    overflow: "hidden",
  },
  imageStyle: {
    height: 250,
    flex: 1,
    width: null,
  },
  gradient: {
    height: 300,
    flex: 1,
    width: null,
    borderRadius: 15,
  },
};

export default PhotoDetail;
