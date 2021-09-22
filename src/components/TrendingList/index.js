import React from 'react';
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
// import {SvgUri} from 'react-native-svg';
// import {useGetCryptosQuery} from '../../services/cryptoApi';

const TrendingList = ({item}) => {
  // const {data: cryptoList, isFetching} = useGetCryptosQuery(5);
  // const [cryptos, setCryptos] = useState(cryptoList.data.coins);
  console.log('====================================');
  console.log(item.iconUrl);
  console.log('====================================');
  return (
    <TouchableOpacity
      style={{
        width: 180,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        // marginLeft: index == 0 ? SIZES.padding : 0,
        marginRight: SIZES.radius,
        borderRadius: 10,
        backgroundColor: COLORS.white,
      }}>
      {/* Currency */}
      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            source={{uri: item.iconUrl}}
            // resizeMode="cover"
            style={{marginTop: 5, width: 25, height: 25, resizeMode: 'cover'}}
          />
          {/* <SvgUri
            uri={item.iconUrl}
            style={{marginTop: 5, width: 25, height: 25, resizeMode: 'cover'}}
          /> */}
        </View>
        <View style={{marginLeft: SIZES.base}}>
          <Text>1290</Text>
        </View>
      </View>

      {/* Value */}
    </TouchableOpacity>
  );
};

export default TrendingList;
