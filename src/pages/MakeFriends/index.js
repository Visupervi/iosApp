/**
 * @Author visupervi
 * @Description 交朋友路由组件
 * @Date 3:30 下午 2021/4/19
 * @Param
 * @return
 */
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
} from 'react-native';
// import {inject, observer} from 'mobx-react';
import {ImageHeaderScrollView} from 'react-native-image-header-scroll-view';
import HeaderIcon from './components/HeaderIcon';
import Recommend from './components/recommends';
import PerfectGirl from './components/PerfectGirl';
import RecommendList from './components/RecommendList';
import {Overlay, Theme} from 'teaset';
import IconFont from '../../components/IconComponent/IconFont';
import PersonFilter from './components/PersonFilter';


const MakeFriend = props => {
  // const [birthDate, setBirthDate] = useState('');
  const [filterObj, setFilterObj] = useState({});
  const handlerSelect = useCallback(() => {
    let overlayViewRef = null;
    Theme.set({fitIPhoneX: false});
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
          close={() => {
            overlayViewRef.close();
          }}
          onSubmint={getFilterCondition}
          style={{
            flexDirection: 'row',
            // justifyContent: 'center',
            width: '40%',
            alignSelf: 'center',
          }}
        />
      </Overlay.View>
    );
    Overlay.show(overlayView);
  }, []);
  const getFilterCondition = (value) => {
    setFilterObj(value);
  };
  return (
    <ImageHeaderScrollView
      maxHeight={150}
      minHeight={44}
      headerImage={require('../../assets/images/headfriend.png')}
      renderForeground={() => (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <HeaderIcon/>
        </View>
      )}
    >
      <View style={{minHeight: 1000}}>
        <Recommend/>
        <View style={{height: 5, backgroundColor: '#ccc'}} />
        <PerfectGirl />
        <View style={{height: 5, backgroundColor: '#ccc'}}/>
        <View style={{
          height: 40,
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: '#ccc',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Text>推荐</Text>
          <IconFont onPress={handlerSelect} name="iconshaixuan"/>
        </View>

        {/*推荐列表*/}
        <RecommendList filterObj={filterObj}/>
      </View>
    </ImageHeaderScrollView>
  );
};
export default MakeFriend;
