/**
 * @Author visupervi
 * @Description 粉丝关注路由组件
 * @Date 9:15 上午 2021/4/27
 * @Param
 * @return
 */

import React, {useEffect, useState} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import GroupTabbar from '../../../Circle/components/GroupTabbar';
import Fans from './fans';
import Focus from './focus';
import FollowEach from './followEach';
import {useNavigation} from "@react-navigation/native"
import {getFansList} from '../../../../apis';

const Follow = props => {
  const Navigation = useNavigation();

  const [fansList, setFansList] = useState([]);
  useEffect(()=>{
    const getData = async () => {
      const res = await getFansList({type:props.route.params.type});
      if(res.code === "1000") {
        setFansList(res.list);
        console.log("fanslist", res);
      }
    };
    getData();
  },[props.route.params.type])
  return (
    <>
      <ScrollableTabView
        initialPage={props.route.params.type}
        renderTabBar={() => <GroupTabbar onPress={Navigation.goBack} isBack={true} />}
      >
        <FollowEach listData={fansList} tabLabel='互相关注'></FollowEach>
        <Focus listData={fansList} tabLabel='关注'></Focus>
        <Fans listData={fansList} tabLabel='粉丝'></Fans>
      </ScrollableTabView>
    </>
  );
};

export default Follow;
