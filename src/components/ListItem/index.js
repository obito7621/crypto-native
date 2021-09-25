import React from 'react';
import millify from 'millify';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {COLORS, dummyData, FONTS, SIZES} from '../../constants';

function ListItem({item}) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SIZES.base,
      }}
      onPress={() => console.log(item)}>
      <Image
        source={dummyData.trendingCurrencies[1].image}
        style={{width: 30, height: 30}}
      />
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{...FONTS.h3}}>{item.name}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            ...FONTS.h3,
          }}>
          {millify(item.volume)}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            ...FONTS.h3,
          }}>
          {millify(item.volume)}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            ...FONTS.h3,
          }}>
          {millify(item.volume)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: COLORS.white,
    justifyContent: 'space-around',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    ...FONTS.h3,
  },
});

export default ListItem;
