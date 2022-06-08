import React, { useState, useEffect } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

const AlbumList = (props) => {
  const [photoset, setPhotoset] = useState(null);

  useEffect(() => {
    const albumList = async () => {
      await axios
        .get(
          "https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=124501149@N08&format=json&nojsoncallback=1"
        )
        .then((response) => setPhotoset(response.data.photosets.photoset));
    };
    albumList();
  }, []);

  // console.log(photoset);

  const itemSeparator = () => {
    return (
      <View
        style={{
          marginHorizontal: 10,
          borderBottomWidth: 0.5,
          opacity: 0.3,
        }}
      />
    );
  };

  if (!photoset) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="rgba(0, 0, 0, 0.8)"/>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={photoset}
        renderItem={({ item }) => (
          <AlbumDetail
            navigation={props.navigation}
            key={item.id}
            title={item.title._content}
            albumId={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

export default AlbumList;