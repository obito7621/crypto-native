import React, {useCallback} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  Linking,
  Alert,
} from 'react-native';

import {COLORS, FONTS, SIZES} from '../../constants';

function Card({title, subTitle, imageUrl, url, styles}) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={{
          // borderRadius: 15,
          backgroundColor: COLORS.white,
          marginBottom: 20,
          ...styles,
          // overflow: 'hidden',
        }}>
        <Image
          style={{width: '100%', height: 200}}
          source={{uri: imageUrl}}
          resizeMode="cover"
        />
        <View style={{padding: 20}}>
          <Text style={{...FONTS.h3}}>{title}</Text>
          <Text style={{...FONTS.body5}}>{subTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;
