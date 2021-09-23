import React, {useState, useEffect} from 'react';
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
// import HTMLReactParser from "html-react-parser";
import {
  VictoryScatter,
  VictoryLine,
  VictoryAxis,
  VictoryChart,
} from 'victory-native';
import {VictoryCustomTheme} from '../../styles';
import {
  HeaderBar,
  CurrencyLabel,
  TextButton,
  PriceAlert,
} from '../../components';
import {dummyData, COLORS, SIZES, FONTS, icons, images} from '../../constants';

const CryptoDetailsScreen = ({route, navigation}) => {
  const scrollX = new Animated.Value(0);
  const numberOfCharts = [1, 2, 3];

  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [chartOptions, setChartOptions] = useState(dummyData.chartOptions);
  const [selectedOption, setSelectedOption] = useState(chartOptions[0]);

  useEffect(() => {
    const {currency} = route.params;
    setSelectedCurrency(currency);
  }, []);

  function optionOnClickHandler(option) {
    setSelectedOption(option);
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={{height: 30, marginTop: 15}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {numberOfCharts.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });

            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: 'clamp',
            });

            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  // console.log('====================================');
  // console.log(selectedCurrency?.iconUrl);
  // console.log('====================================');

  function renderChart() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          alignItems: 'center',
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}>
          <View style={{flex: 1}}>
            <CurrencyLabel
              icon={dummyData?.trendingCurrencies[0].image}
              currency={selectedCurrency?.name}
              code={selectedCurrency?.symbol}
            />
          </View>
          <View>
            <Text style={{...FONTS.h3}}>
              ${parseInt(selectedCurrency?.price)}
            </Text>
            <Text
              style={{
                color: selectedCurrency?.change > 0 ? COLORS.green : COLORS.red,
                ...FONTS.body3,
              }}>
              {selectedCurrency?.change}
            </Text>
          </View>
        </View>

        {/* Chart */}
        <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment="center"
          snapToInterval={SIZES.width - 40}
          showsHorizontalScrollIndicato={false}
          decelerationRate={0}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}>
          {numberOfCharts.map((item, index) => (
            <View
              key={`chart-${index}`}
              style={{marginLeft: index == 0 ? SIZES.base : 0}}>
              <View style={{marginTop: -25}}>
                <VictoryChart
                  theme={VictoryCustomTheme}
                  height={220}
                  width={SIZES.width - 40}>
                  <VictoryLine
                    style={{
                      data: {
                        stroke: COLORS.secondary,
                      },
                      parent: {
                        border: '1px solid #ccc',
                      },
                    }}
                    data={dummyData?.trendingCurrencies[0].chartData}
                    categories={{
                      x: ['15 MIN', '30 MIN', '45 MIN', '60MIN'],
                      y: ['15', '30', '45'],
                    }}
                  />
                  <VictoryScatter
                    data={dummyData?.trendingCurrencies[0].chartData}
                    size={7}
                    style={{
                      data: {
                        fill: COLORS.secondary,
                      },
                    }}
                  />
                  <VictoryAxis style={{grid: {stroke: 'transparent'}}} />
                  <VictoryAxis
                    dependentAxis
                    style={{
                      axis: {
                        stroke: 'transparent',
                      },
                      grid: {stroke: 'grey'},
                    }}
                  />
                </VictoryChart>
              </View>
            </View>
          ))}
        </Animated.ScrollView>

        {/* Options */}
        <View
          style={{
            width: '100%',
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {chartOptions.map(option => {
            return (
              <TextButton
                key={`option-${option.id}`}
                label={option.label}
                customContainerStyle={{
                  height: 30,
                  width: 60,
                  borderRadius: 15,
                  backgroundColor:
                    selectedOption.id == option.id
                      ? COLORS.primary
                      : COLORS.lightGray,
                }}
                customLabelStyle={{
                  color:
                    selectedOption.id == option.id ? COLORS.white : COLORS.gray,
                  ...FONTS.body5,
                }}
                onPress={() => optionOnClickHandler(option)}></TextButton>
            );
          })}
        </View>

        {/* Dots */}
        {renderDots()}
      </View>
    );
  }

  function renderBuy() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          padding: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: SIZES.radius,
          }}>
          {/* Currency */}
          <View style={{flex: 1}}>
            <CurrencyLabel
              icon={dummyData.trendingCurrencies[0].image}
              currency={`${selectedCurrency?.name} Wallet`}
              code={selectedCurrency?.symbol}
            />
          </View>

          {/* Amount */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginRight: SIZES.base}}>
              <Text style={{...FONTS.h3}}>
                ${dummyData?.trendingCurrencies[0]?.wallet?.value}
              </Text>
              <Text
                style={{
                  textAlign: 'right',
                  color: COLORS.gray,
                  ...FONTS.body4,
                }}>
                ${dummyData?.trendingCurrencies[0]?.wallet?.crypto}
                {selectedCurrency?.symbol}
              </Text>
            </View>
            <Image
              source={icons.right_arrow}
              resizeMode="cover"
              style={{width: 20, height: 20, tintColor: COLORS.gray}}
            />
          </View>
        </View>
        <TextButton
          label="Buy"
          onPress={() =>
            navigation.navigate('ExchangesScreen', {currency: selectedCurrency})
          }
        />
      </View>
    );
  }

  function renderAbout() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          padding: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}>
        <Text style={{...FONTS.h3}}>About {selectedCurrency?.name}</Text>
        <Text style={{marginTop: SIZES.base, ...FONTS.body3}}>
          {/* use HTML parser */}
          {selectedCurrency?.description.length > 200
            ? `${selectedCurrency?.description.substring(0, 200)}...`
            : selectedCurrency?.description}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray1,
      }}>
      <HeaderBar right={true} />
      <ScrollView>
        <View style={{flex: 1, paddingBottom: SIZES.padding}}>
          {renderChart()}
          {renderBuy()}
          {renderAbout()}
          <PriceAlert
            customContainerStyle={{
              marginTop: SIZES.padding,
              marginHorizontal: SIZES.radius,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default CryptoDetailsScreen;
