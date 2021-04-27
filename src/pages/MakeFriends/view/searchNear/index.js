/**
 * @Author visupervi
 * @Description 搜附近由组件
 * @Date 3:30 下午 2021/4/19
 * @Param
 * @return
 */
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text, ImageBackground, TouchableOpacity, Image, SafeAreaView,
} from 'react-native';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import {getNearPerson} from '../../../../apis';
import {screenHeight, screenWidth} from '../../../../utils/styleKits';
import PersonFilter from '../../components/PersonFilter';
import IconFont from '../../../../components/IconComponent/IconFont';
import {Overlay, Theme} from 'teaset';

const SearchNear = props => {
  const [distance, setDistance] = useState('');
  const [gender, setGender] = useState('');
  const [nearPerson, setNearPerson] = useState([]);
  const [count, setCount] = useState(0);
  const [FilterObj, setFilterObj] = useState(0);
  const WHMap = {
    'wh1': {width: 70, height: 100},
    'wh2': {width: 60, height: 90},
    'wh3': {width: 50, height: 80},
    'wh4': {width: 40, height: 70},
    'wh5': {width: 30, height: 60},
    'wh6': {width: 20, height: 50},
  };
  const getWidthHeight = (dist) => {
    if (dist < 200) {
      return 'wh1';
    }
    if (dist < 400) {
      return 'wh2';
    }
    if (dist < 600) {
      return 'wh3';
    }
    if (dist < 1000) {
      return 'wh4';
    }
    if (dist < 1500) {
      return 'wh5';
    }
    return 'wh6';
  };
  useEffect(() => {
    let isUnmounted = false;
    const abortController = new AbortController(); // 创建
    const getData = async () => {
      const res = await getNearPerson({
        distance: distance,
        gender: gender,
      });
      if (res.code === '1000') {
        if(!isUnmounted) {
          setNearPerson(res.list);
          setCount(res.list.length);
        }

      }
    };
    getData();
    return () => {
      isUnmounted = true;
      abortController.abort();
    }
  }, []);
  const handlerNearFilter = useCallback(()=>{
    let overlayViewRef = null;
    Theme.set({fitIPhoneX: false})
    let overlayView = (
      <Overlay.View
        style={{alignItems: 'center', justifyContent: 'center'}}
        modal={true}
        overlayOpacity={0.5}
        ref={v => overlayViewRef = v}
      >
        <PersonFilter
          iconWid={20}
          iconHei={20}
          close={()=> {overlayViewRef.close()}}
          onSubmint={getFilterCondition}
          style={{
            flexDirection: 'row',
            // justifyContent: 'center',
            width: '40%',
            alignSelf: 'center',
          }}
        ></PersonFilter>
      </Overlay.View>
    );
    Overlay.show(overlayView);
  },[]);
  const getFilterCondition = (value)=>{
    setFilterObj(value);
  }

  return (
    <>

      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ImageBackground
          style={{
            height: '100%',
            flex: 1,
            position: 'relative',
          }}
          imageStyle={{height: '100%'}}
          source={require('../../../../assets/images/search.gif')}
        >
          <AppHeader displayLeft={true} title={'搜附近'}></AppHeader>

          <IconFont onPress={handlerNearFilter} name="iconshaixuan"></IconFont>
          {
            nearPerson.map((v, i) => {
              const whMap = WHMap[getWidthHeight(v.dist)];
              const tx = Math.random() * (screenWidth - whMap.width);
              const ty = Math.random() * (screenHeight - whMap.height);
              return (
                <>
                  <SafeAreaView>
                    <TouchableOpacity
                      key={i}
                      style={{position: 'absolute', left: tx, top: ty}}
                    >
                      <ImageBackground
                        source={require('../../../../assets/images/showfirend.png')}
                        resizeMode="stretch"
                        style={{...whMap, position: 'relative', alignItems: 'center'}}
                      >
                        <Text
                          numberOfLines={1}
                          style={{color: '#ffffff9a', position: 'absolute', top: -20}}
                        >{v.nick_name}</Text>
                        <Image style={{
                          width: whMap.width, height: whMap.width,
                          borderRadius: whMap.width / 2,
                        }} source={{uri: v.header}}/>
                      </ImageBackground>
                    </TouchableOpacity>
                  </SafeAreaView>
                </>
              );

            })
          }
          <View style={{
            position: 'absolute',
            bottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
            <Text style={{color: '#fff'}}>您附近有{count}个好友</Text>
            <Text style={{color: '#fff', marginTop: 10}}>选择聊聊吧</Text>
          </View>
        </ImageBackground>

      </View>

    </>
  );
};

export default SearchNear;
