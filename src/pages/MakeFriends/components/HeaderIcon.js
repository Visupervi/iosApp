/**
 * @Author visupervi
 * @Description HeaderIcon组件
 * @Date 3:30 下午 2021/4/19
 * @Param
 * @return
 */
import React, {useCallback} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {inject, observer} from 'mobx-react';
import SvgUri from 'react-native-svg-uri';
import {tanhua, near, testSoul} from '../../../utils/SvgIcons';
// import {useNavigation}  from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const HeaderIcon = props => {
  const Navigation = useNavigation();

  const handlerGotoPage = value => {
    Navigation.navigate(value);
  };

  return (
    <>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            width: '70%',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              handlerGotoPage('SearchFlower');
              // navigation.navigate('SearchFlower');
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#fd8e5c',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgUri
                width={30}
                height={30}
                fill={'#fff'}
                svgXmlData={tanhua}
              />
            </View>
            <Text style={{marginTop: 4, color: '#ffffff9a'}}>探花</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              handlerGotoPage('SearchNear');
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#2285dc',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgUri width={30} height={30} fill={'#fff'} svgXmlData={near} />
            </View>
            <Text style={{marginTop: 4, color: '#ffffff9a'}}>搜附近</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => {
              handlerGotoPage('TestSoul');
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#fb3849',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgUri
                width={30}
                height={30}
                fill={'#fff'}
                svgXmlData={testSoul}
              />
            </View>
            <Text style={{marginTop: 4, color: '#ffffff9a'}}>测灵魂</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
export default HeaderIcon;
