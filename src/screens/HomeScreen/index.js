import React, {useState} from 'react';
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
import TrendingList from '../../components/TrendingList';

import {dummyData, COLORS, SIZES, FONTS, icons, images} from '../../constants';

import {useGetCryptosQuery} from '../../services/cryptoApi';

const HomeScreen = ({navigation}) => {
  const {data: cryptoList, isFetching} = useGetCryptosQuery(5);
  const [cryptos, setCryptos] = useState(cryptoList.data.coins);
  // console.log('====================================');
  // console.log(cryptos);
  // console.log('====================================');

  // const [trending, setTrending] = React.useState(data);
  // console.log('====================================');
  // console.log(trending);
  // console.log('====================================');

  function renderHeader() {
    return (
      <View style={{width: '100%', height: 290, ...styles.shadow}}>
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
              $148569
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body5}}>
              +24.03% Last 24 hours
            </Text>
          </View>

          {/* Trending */}
          <View
            style={{
              // position: '',
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
              renderItem={({item}) => <TrendingList item={item} />}
              keyExtractor={item => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{flex: 1, paddingBottom: 130}}>{renderHeader()}</View>
    </ScrollView>
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
