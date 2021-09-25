import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';

import {COLORS, SIZES, FONTS, icons, images} from '../../constants';

import {useNavigation} from '@react-navigation/native';

const HeaderBar = ({left, right, center}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        height: 70,
        alignItems: 'center',
      }}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        {center && (
          <Text style={{color: COLORS.white, ...FONTS.h1}}>{center}</Text>
        )}
        {left && (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.back_arrow}
              resizeMode="contain"
              style={{width: 18, height: 18, tintColor: COLORS.white}}
            />
            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.h3,
              }}>
              Back
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {right && (
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity>
            <Image
              source={icons.star}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HeaderBar;
