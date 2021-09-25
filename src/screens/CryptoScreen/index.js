import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ActivityIndicator, HeaderBar, TrendingList} from '../../components';
import {COLORS, dummyData, SIZES} from '../../constants';

// import {Header, SearchBar} from 'react-native-elements';

import {useGetCryptosQuery} from '../../services/cryptoApi';

const CryptoScreen = ({navigation}) => {
  const {data: cryptoList, isFetching} = useGetCryptosQuery(20);
  const cryptos = cryptoList?.data?.coins;

  function renderHeader() {
    return <HeaderBar center={'Cryptos'} />;
  }

  function renderCrypots() {
    return (
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: SIZES.base,
          paddingBottom: 130,
          // backgroundColor: '#fff',
        }}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={cryptos}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => (
          <TrendingList
            item={item}
            index={index}
            backgroundColor={`${item?.color}49`}
            styles={{
              marginVertical: SIZES.base,
              // backgroundColor: `${item?.color}e4`,
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    );
  }
  return (
    <SafeAreaProvider>
      <ActivityIndicator visible={isFetching} />
      {renderHeader()}
      {renderCrypots()}
    </SafeAreaProvider>
  );
};

export default CryptoScreen;
