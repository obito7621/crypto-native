import React from 'react';
// import {SvgUri} from 'react-native-svg';
import millify from 'millify';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants';
import {useNavigation} from '@react-navigation/core';

const TrendingList = ({item, index, styles, backgroundColor}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: 180,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        marginRight: SIZES.radius,
        borderRadius: 10,
        backgroundColor: backgroundColor,
        ...styles,
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
