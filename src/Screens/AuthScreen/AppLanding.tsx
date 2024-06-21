/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import {fontSz} from '../../utils';
import CardList from '../../components/common/CardList';
import ToggleTabs from '../../components/common/ToggleTabs';
import ActiveCard from '../../components/common/ActiveCard';
import SearchBarWithNavigation from '../../components/common/SearchBarWithavigation';

const AppLanding = () => {
  const [selectedTab, setSelectedTab] = useState('first');
  const handleTabSelect = (tab: string) => {
    setSelectedTab(tab);
  };

  const cardsData = [
    {
      imageSource: require('../../asset/svg/blockOfFlats.png'),
      rating: '4.8 (73)',
      title: '2-Bedroom Flat Ensuite',
      location: 'Surulere, Lagos',
      rooms: 2,
      area: 73,
      price: 200000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats4.png'),
      rating: '4.8 (73)',
      title: '2-Bedroom Flat Ensuite',
      location: 'Gbadaga, Lagos',
      rooms: 2,
      area: 73,
      price: 240000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats3.png'),
      rating: '4.9 (73)',
      title: 'Block of 2-Bedroom Flats',
      location: 'Yaba, Lagos',
      rooms: 2,
      area: 88,
      price: 180000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats4.png'),
      rating: '4.8 (73)',
      title: '2-Bedroom Flat Ensuite',
      location: 'Gbadaga, Lagos',
      rooms: 2,
      area: 73,
      price: 200000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats3.png'),
      rating: '4.9 (73)',
      title: 'Block of 2-Bedroom Flats',
      location: 'Yaba, Lagos',
      rooms: 2,
      area: 88,
      price: 180000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats4.png'),
      rating: '4.8 (73)',
      title: '2-Bedroom Flat Ensuite',
      location: 'Gbadaga, Lagos',
      rooms: 2,
      area: 73,
      price: 200000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats3.png'),
      rating: '4.9 (73)',
      title: 'Block of 2-Bedroom Flats',
      location: 'Yaba, Lagos',
      rooms: 2,
      area: 88,
      price: 180000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats4.png'),
      rating: '4.8 (73)',
      title: '2-Bedroom Flat Ensuite',
      location: 'Gbadaga, Lagos',
      rooms: 2,
      area: 73,
      price: 200000,
    },
  ];
  const cardsData2 = [
    {
      imageSource: require('../../asset/svg/blockOfFlats2.png'),
      rating: '4.9 (73)',
      title: 'Block of 2-Bedroom Flats',
      location: 'S.W Ikoyi, Lagos',
      rooms: 2,
      area: 88,
      price: 300000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats.png'),
      rating: '4.8 (73)',
      title: '2-Bedroom Flat Ensuite',
      location: 'Gbadaga, Lagos',
      rooms: 2,
      area: 73,
      price: 200000,
    },
  ];
  const cardsData3 = [
    {
      imageSource: require('../../asset/svg/blockOfFlats3.png'),
      rating: '4.9 (73)',
      title: 'Block of 2-Bedroom Flats',
      location: 'Yaba, Lagos',
      rooms: 2,
      area: 88,
      price: 180000,
    },
    {
      imageSource: require('../../asset/svg/blockOfFlats4.png'),
      rating: '4.8 (73)',
      title: '2-Bedroom Flat Ensuite',
      location: 'Gbadaga, Lagos',
      rooms: 2,
      area: 73,
      price: 200000,
    },
  ];

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          paddingVertical:
            Platform.OS === 'ios' ? SIZES.height / 22 : SIZES.padding,
        }}>
        <ScrollView
          style={{flex: 1, paddingHorizontal: SIZES.padding2}}
          showsVerticalScrollIndicator={false}>
          <Text style={{fontSize: fontSz(16), fontFamily: FONTS.fontFamily}}>
            Your current location
          </Text>
          <View
            style={{
              paddingVertical: 10,
              flexDirection: 'row',
              gap: 10,
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontFamily: FONTS.fontFamilyExtraBold,
                fontSize: fontSz(20),
              }}>
              Ikoyi, Lagos
            </Text>
            <TouchableOpacity>
              <Image
                source={require('../../asset/svg/arrow-down.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
          <SearchBarWithNavigation />
          <View style={{paddingVertical: 20}}>
            <Text
              style={{
                fontFamily: FONTS.fontFamilyExtraBold,
                fontSize: fontSz(22),
              }}>
              Welcome to MXA
            </Text>
            {/* Tab Bar */}
            <View>
              <ToggleTabs
                selectedTab={handleTabSelect}
                currentTab={selectedTab}
                firstLabel="I need to rent"
                secondLabel="I want to list"
                small={false}
              />
            </View>

            {/* Conditional Rendering Based on Selected Tab */}
            {selectedTab === 'first' ? (
              <View>
                <Text
                  style={{
                    fontFamily: FONTS.fontFamilyExtraBold,
                    fontSize: fontSz(22),
                  }}>
                  Near your location
                </Text>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingVertical: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: fontSz(15),
                      fontFamily: FONTS.fontFamily,
                      color: COLORS.inActiveTab,
                    }}>
                    243 properties Available
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: fontSz(16),
                        fontFamily: FONTS.fontFamilyBold,
                      }}>
                      See all
                    </Text>
                  </TouchableOpacity>
                </View>
                <CardList cardsData={cardsData} />

                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingVertical: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTS.fontFamilyExtraBold,
                      fontSize: fontSz(22),
                    }}>
                    Top rated
                  </Text>

                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: fontSz(16),
                        fontFamily: FONTS.fontFamilyBold,
                      }}>
                      See all
                    </Text>
                  </TouchableOpacity>
                </View>
                <CardList cardsData={cardsData2} />
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingVertical: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: FONTS.fontFamilyExtraBold,
                      fontSize: fontSz(22),
                    }}>
                    Hot Deals
                  </Text>

                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: fontSz(16),
                        fontFamily: FONTS.fontFamilyBold,
                      }}>
                      See all
                    </Text>
                  </TouchableOpacity>
                </View>
                <CardList cardsData={cardsData3} />

                <ActiveCard />
              </View>
            ) : (
              <View>
                <Text
                  style={{
                    fontFamily: FONTS.fontFamilyExtraBold,
                    fontSize: fontSz(22),
                    paddingVertical: 10,
                  }}>
                  List your property
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.fontFamily,
                    fontSize: fontSz(16),
                    paddingVertical: 5,
                  }}>
                  To list your property, please provide the necessary details
                  about your property. Our team will review and approve your
                  listing within 24 hours.
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AppLanding;
