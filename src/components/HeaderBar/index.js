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

const HeaderBar = ({right}) => {
  const navigation = useNavigation();

  return (
    <View style={{paddingHorizontal: SIZES.padding, flexDirection: 'row'}}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back_arrow}
            resizeMode="contain"
            style={{width: 18, height: 18, tintColor: COLORS.gray}}
          />
          <Text style={{marginLeft: SIZES.base, ...FONTS.h4}}>Back</Text>
        </TouchableOpacity>
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
