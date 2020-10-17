import React, { useEffect } from 'react';
import { View } from 'react-native';

export default ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Video>

      </Video>
    </View>
  );
};
