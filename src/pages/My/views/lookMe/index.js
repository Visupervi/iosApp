/**
 * @Author visupervi
 * @Description 谁看过我路由组件
 * @Date 10:16 上午 2021/4/27
 * @Param
 * @return
 */

import React, {useCallback, useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text, TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import {useNavigation} from '@react-navigation/native';
import {getRecommendsList} from '../../../../apis';
import IconFont from '../../../../components/IconComponent/IconFont';
import RecommendList from '../../../MakeFriends/components/RecommendList';

const LookMe = props => {
  // console.log("props", props);
  const Navigator = useNavigation();
  const [recommendList, setRecommendList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getRecommendsList();
      if (res.status === 200) {
        setRecommendList(res.list);
      }
    };
    getData();
  }, []);

  const renderItem = useCallback((item) => {
    return (
      <TouchableOpacity
        key={item.item.id}
        style={{
          marginTop:5,
          flexDirection:"row",
          borderBottomWidth:1,
          borderBottomColor:"#ccc",
          padding:10
        }}
        onPress={()=>{Navigator.navigate("FriendsDetails",{id:item.item.id,nickName:item.item.nick_name})}}
      >
        <View style={{position: 'relative'}}>
          <Image style={{height: 60, width: 60, borderRadius:30}} source={{uri: item.item.header}}></Image>
        </View>
        {/*右边结构*/}
        <View style={{flex: 1, flexDirection: 'row', marginLeft:5}}>
          <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
            <Text>
              {item.item.nick_name} &nbsp;
              <IconFont style={{color: 'red'}} name="icontanhuanv"></IconFont>&nbsp;
              {item.item.age}岁
            </Text>
            <Text style={{marginTop: 2}}>
              {item.item.marry} |&nbsp;
              {item.item.degree} |&nbsp;
              {item.item.agediff === 0 ? '年龄相仿' : '差距有点大'}
            </Text>
          </View>
          <View style={{
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
          }}>
            <View style={{
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <IconFont style={{color: 'red', fontSize: 30}} name="iconxin"></IconFont>
              <Text style={{
                position: 'absolute',
                color: '#fff',
              }}>{item.item.fateValue}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  })
  // const [birthDate, setBirthDate] = useState('');
  return (
    <>
      <View style={{ flex:1}}>
        <AppHeader displayLeft={true} title={props.route.params.title}></AppHeader>
        {/*左部图片*/}
        {
          recommendList.length > 0 ?
            <RecommendList></RecommendList> :
            <></>
        }
      </View>
    </>
  );
}
export default LookMe;
