import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const AlbumDetail = ({navigation, title, albumId}) => {
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle,
  } = styles;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('photoList', {albumId: albumId})}
    >
      <View style={headerContentStyle}>
        <Ionicons name="albums-outline" size={24} color="black" />
        <Text style={headerTextStyle}>{title}</Text>
        <View style={{ flex: 1}}/>
        <SimpleLineIcons name="arrow-right" size={24} color="rgba(0, 0, 0, 0.7)" />
      </View>
  </TouchableOpacity>
  );
};


const styles = {
  headerContentStyle: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  headerTextStyle: {
    fontSize: 18,
    marginLeft: 10,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default AlbumDetail;
