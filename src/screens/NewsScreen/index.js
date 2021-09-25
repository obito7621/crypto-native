import React, {useCallback, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, Linking, Alert} from 'react-native';
import {ActivityIndicator, Card, HeaderBar} from '../../components';

import {useGetCryptoNewsQuery} from '../../services/cryptoNewsApi';

import {COLORS, FONTS, SIZES} from '../../constants';

const demoImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const NewsScreen = () => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const {data: cryptoNews} = useGetCryptoNewsQuery({
    newsCategory,
    count: 12,
  });
  const news = cryptoNews?.value;
  // console.log('====================================');
  // console.log(news?.value);
  // console.log('====================================');
  function renderHeader() {
    return <HeaderBar center={'News'} left={false} right={false} />;
  }

  function renderNews() {
    return (
      <FlatList
        data={news}
        renderItem={({item, index}) => (
          <Card
            title={item.name}
            subTitle={item.description}
            imageUrl={item?.image?.thumbnail?.contentUrl || demoImage}
            url={item?.url}
            styles={{marginTop: index == 0 ? SIZES.padding : 0}}
          />
        )}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    );
  }
  return (
    <>
      <ActivityIndicator visible={false} />
      <SafeAreaView>
        {renderHeader()}
        {renderNews()}
      </SafeAreaView>
    </>
  );
};

export default NewsScreen;
