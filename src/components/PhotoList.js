import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';

const PhotoList = (props) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    console.log(props);
    const photoList = async () => {
      await axios
        .get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${props.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`)
        .then((response) => setPhotos(response.data.photoset.photo));
    }
    photoList();
  }, []);

  // console.log(photos);

  if (!photos) {
    return (
      <View style={{flex: 1}}>
        <Text style={{margin:5}}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlatList 
        data={photos}
        renderItem={({item}) => (
          <PhotoDetail
            key={item.title}
            title={item.title}
            photoId={item.id}
            imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
          />
        )}
      />
    </View>
  );

}

export default PhotoList;
