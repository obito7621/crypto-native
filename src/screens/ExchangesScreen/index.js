import millify from 'millify';
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ActivityIndicator, HeaderBar, ListItem} from '../../components';
import {COLORS, dummyData, FONTS, SIZES} from '../../constants';

import {useGetExchangesQuery} from '../../services/cryptoApi';

const ExchangesScreen = ({navigation}) => {
  const {data, isFetching} = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  function renderHeader() {
    return (
      <>
        <HeaderBar center={'Exchanges'} />
        <View
          style={{
            height: SIZES.base * 6,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.padding * 0.5,
            // justifyContent: 'center',
            backgroundColor: COLORS.lightGray1,
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{...FONTS.h3}}>Exchange</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{...FONTS.h3}}>24H Volume</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{...FONTS.h3}}>Markets</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{...FONTS.h3}}>Change</Text>
          </View>
        </View>
      </>
    );
  }

  function renderExchanges() {
    return (
      <FlatList
        contentContainerStyle={{
          paddingBottom: 100,
          paddingHorizontal: SIZES.padding * 0.5,
          backgroundColor: COLORS.white,
        }}
        // numColumns={2}
        // columnWrapperStyle={{justifyContent: 'space-between'}}
        data={exchangesList}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => <ListItem item={item} />}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: COLORS.lightGray,
              }}></View>
          );
        }}
      />
    );
  }
  return (
    <SafeAreaProvider>
      {/* <ActivityIndicator visible={isFetching} /> */}
      {renderHeader()}
      {renderExchanges()}
    </SafeAreaProvider>
  );
};

export default ExchangesScreen;
