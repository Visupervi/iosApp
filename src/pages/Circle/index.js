/**
 * @Author visupervi
 * @Description 推荐与最新首页
 * @Date 3:54 下午 2021/4/26
 * @Param
 * @return
 */

import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Lasted from './view/lasted';
import Recommend from './view/recommend';
import GroupTabbar from './components/GroupTabbar';
const Circle = props => {
  return (
    <>
      <ScrollableTabView
        initialPage={0}
        renderTabBar={() => <GroupTabbar isBack={false} />}>
        <Recommend tabLabel="推荐" />
        <Lasted tabLabel="最新" />
      </ScrollableTabView>
    </>
  );
};

export default Circle;
