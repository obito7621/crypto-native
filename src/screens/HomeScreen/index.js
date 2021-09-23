import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  LogBox,
} from 'react-native';

import {
  PriceAlert,
  TrendingList,
  TransactionHistory,
  ActivityIndicator,
} from '../../components';

import {dummyData, COLORS, SIZES, FONTS, icons, images} from '../../constants';

import {useGetCryptosQuery} from '../../services/cryptoApi';

const HomeScreen = ({navigation}) => {
  const {data: cryptoList, isFetching} = useGetCryptosQuery(5);
  const cryptos = cryptoList?.data?.coins;
  const [transactionhistory, setTransactionhistory] = useState(
    dummyData.transactionHistory,
  );
  // console.log('====================================');
  // console.log(cryptos);
  // console.log('====================================');

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  function renderHeader() {
    return (
      <View style={{width: '100%', height: 270, ...styles.shadow}}>
        <ImageBackground
          source={images.banner}
          resizeMode="cover"
          style={{flex: 1, alignItems: 'center'}}>
          {/* Header Bar */}
          <View
            style={{
              marginTop: SIZES.padding,
              width: '100%',
              alignItems: 'flex-end',
              paddingHorizontal: SIZES.padding,
            }}>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => console.log('Notifications')}>
              <Image
                source={icons.notification_white}
                resizeMode="contain"
                style={{flex: 1}}
              />
            </TouchableOpacity>
          </View>

          {/* Balance */}
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>
              Your Portfolio Balance
            </Text>
            <Text
              style={{marginTop: SIZES.base, color: COLORS.white, ...FONTS.h1}}>
              $14,856.49
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body5}}>
              +24.03% Last 24 hours
            </Text>
          </View>

          {/* Trending */}
          <View
            style={{
              position: 'absolute',
              bottom: '-30%',
            }}>
            <Text
              style={{
                marginLeft: SIZES.padding,
                color: COLORS.white,
                ...FONTS.h2,
              }}>
              Trending
            </Text>
            <FlatList
              contentContainerStyle={{marginTop: SIZES.base}}
              data={cryptos}
              renderItem={({item, index}) => (
                <TrendingList item={item} index={index} />
              )}
              keyExtractor={item => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

  function renderAlert() {
    return <PriceAlert />;
  }

  function renderNotice() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.secondary,
          ...styles.shadow,
        }}>
        <Text style={{color: COLORS.white, ...FONTS.h3}}>Investing Safety</Text>
        <Text
          style={{
            marginTop: SIZES.base,
            color: COLORS.white,
            ...FONTS.body4,
            lineHeight: 18,
          }}>
          It's very difficult to time an investment, especially when the market
          is volatile. Learn how to use dollar cost averaging to your advantage.
        </Text>
        <TouchableOpacity
          style={{marginTop: SIZES.base}}
          onPress={() => console.log('Learn more')}>
          <Text
            style={{
              textDecorationLine: 'underline',
              color: COLORS.green,
              ...FONTS.h3,
            }}>
            Learn more
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderTransactionHistory() {
    return (
      <TransactionHistory
        customContainerStyle={{...styles.shadow}}
        history={transactionhistory}
      />
    );
  }

  return (
    <>
      <ActivityIndicator visible={isFetching} />
      <ScrollView>
        <View style={{flex: 1, paddingBottom: 130}}>
          {renderHeader()}
          {renderAlert()}
          {renderNotice()}
          {renderTransactionHistory()}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default HomeScreen;
