import React from 'react';
import {SvgUri} from 'react-native-svg';
import millify from 'millify';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {dummyData, COLORS, SIZES, FONTS, icons, images} from '../../constants';
import {useNavigation} from '@react-navigation/core';

const TrendingList = ({item, index}) => {
  // console.log('====================================');
  // console.log(item);
  // console.log('====================================');
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: 180,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        marginLeft: index == 0 ? SIZES.padding : 0,
        marginRight: SIZES.radius,
        borderRadius: 10,
        backgroundColor: COLORS.white,
      }}
      onPress={() =>
        navigation.navigate('CryptoDetailsScreen', {currency: item})
      }>
      {/* Currency */}
      <View style={{flexDirection: 'row'}}>
        <View>
          {/* <SvgUri width={25} height={25} y={10} uri={item.iconUrl} /> */}
        </View>
        <View style={{marginLeft: SIZES.base}}>
          <Text style={{...FONTS.h2}}>{item.name}</Text>
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>
            {item.symbol}
          </Text>
        </View>
      </View>

      {/* Value */}
      <View style={{marginTop: SIZES.radius}}>
        <Text style={{...FONTS.h2}}>{millify(item.price)}</Text>
        <Text
          style={{
            color: item.change > 0 ? COLORS.green : COLORS.red,
            ...FONTS.h3,
          }}>
          {item.change}%
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrendingList;
