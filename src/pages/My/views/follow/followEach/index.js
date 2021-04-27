/**
 * @Author visupervi
 * @Description 互相关注组件
 * @Date 10:35 上午 2021/4/27
 * @Param
 * @return
 */

import React, {useCallback} from 'react';
import type {Node} from 'react';
import {
  FlatList, Image, SafeAreaView,
  Text, TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import IconFont from '../../../../../components/IconComponent/IconFont';
import SearchInput from "../component"
const FollowEach = props => {
  const {listData} = props;
  const setDisLike = () => {
    console.log('isLike');
  };
  const renderItem = useCallback((item) => {
    return (
      <>
        {/* 图片 */}
        <View
          key={item.item.id}
          style={{
            flexDirection: 'row', paddingTop: 15,
            paddingBottom: 15, paddingRight: 15,
            borderBottomColor: '#ccc', borderBottomWidth: 1,
          }}>
          <View style={{paddingLeft: 15, paddingRight: 15}}>
            <Image style={{
              width: 50, height: 50,
              borderRadius: 25,
            }} source={{uri: item.item.header}}/>
          </View>
          {/* 名称 */}
          <View style={{flex: 2, justifyContent: 'space-around'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#666', fontWeight: 'bold', fontSize: 17}}>{item.item.nick_name}</Text>
              <View style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                borderRadius: 8,
                paddingLeft: 3,
                paddingRight: 3,
                marginLeft: 15,
              }}>
                <IconFont style={{fontSize: 18, color: item.item.gender === '女' ? '#b564bf' : 'red'}}
                          name={item.item.gender === '女' ? 'icontanhuanv' : 'icontanhuanan'}/>
                <Text style={{color: '#555'}}>{item.item.age}岁</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconFont style={{color: '#666'}} name="iconlocation"/>
              <Text style={{color: '#666', marginLeft: 5}}>{item.item.city}</Text>
            </View>
          </View>
          {/* 按钮  */}
          <TouchableOpacity
            onPress={() => {
              setDisLike(item.item.id);
            }}
            style={{
              alignSelf: 'center',
              flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',
              width: 80,
              height: 30,
              borderRadius: 3,
              borderColor: '#ccc',
              borderWidth: 1,
            }}>
            <IconFont style={{color: '#666'}} name="iconhuxiangguanzhu"/>
            <Text style={{color: '#666'}}>取消关注</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  },[listData]);
  return (
    <SafeAreaView>
      {
        listData.length > 0 ?
          <FlatList
            data={listData}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          >
          </FlatList> :
          <></>
      }
    </SafeAreaView>
  );
};

export default FollowEach;
