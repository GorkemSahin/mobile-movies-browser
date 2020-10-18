import React, { useEffect } from 'react';
import { View } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation-locker';

export default ({ route, navigation }) => {
  const { sample, external, videoURL } = route.params;
  
  useEffect(() =>{
    Orientation.lockToLandscape();
  },[]);

  const goBack = React.useCallback(
    () => {
      Orientation.lockToPortrait();
      navigation.goBack()
    }, [ ]
  )
  
  return (
    <View style={{ flex: 1 }}>
      <VideoPlayer
        source={ sample ? require("../../assets/sample.mp4") : ( external ? { uri: videoURL } : videoURL) }
        onBack={ goBack }
        fullScreen
        disableFullScreen
        disableVolume>
      </VideoPlayer>
    </View>
  );
};
