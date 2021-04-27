/**
 * @Author visupervi
 * @Description App 首页路由组件
 * @Date 8:31 上午 2021/4/22
 * @Param
 * @return
 */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Svg from 'react-native-svg-uri';
import {
  friend,
  selectedFriend,
  group,
  selectedGroup,
  message,
  selectedMessage,
  my,
  selectedMy,
} from '../../utils/SvgIcons';
import MakeFriend from '../MakeFriends';
import Circle from '../Circle';
import Message from '../Message';
import MyHome from '../My';


// import request from "./utils/request";
// import { MY_INFO } from "./utils/pathMap";
// import {inject, observer} from 'mobx-react';
// @inject("UserStore")
// @observer
const Home = props => {
  const [selectedTab, setSelectedTab] = useState('friend');
  const pages = [
    {
      selected: 'friend',
      title: '交友',
      renderIcon: () => <Svg width="20" height="20" svgXmlData={friend}/>,
      renderSelectedIcon: () => <Svg width="20" height="20" svgXmlData={selectedFriend}/>,
      onPress: () => setSelectedTab('friend'),
      component: <MakeFriend/>,
    },
    {
      selected: 'group',
      title: '圈子',
      renderIcon: () => <Svg width="20" height="20" svgXmlData={group}/>,
      renderSelectedIcon: () => <Svg width="20" height="20" svgXmlData={selectedGroup}/>,
      onPress: () => setSelectedTab('group'),
      component: <Circle/>,
    },
    {
      selected: 'message',
      title: '消息',
      renderIcon: () => <Svg width="20" height="20" svgXmlData={message}/>,
      renderSelectedIcon: () => <Svg width="20" height="20" svgXmlData={selectedMessage}/>,
      onPress: () => setSelectedTab('message'),
      component: <Message/>,
    },
    {
      selected: 'my',
      title: '我的',
      renderIcon: () => <Svg width="20" height="20" svgXmlData={my}/>,
      renderSelectedIcon: () => <Svg width="20" height="20" svgXmlData={selectedMy}/>,
      onPress: () => setSelectedTab('my'),
      component: <MyHome/>,
    },
  ];
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  return (
    <>

      <View style={styles.container}>
        <TabNavigator>
          {pages.map((v, i) =>
            <TabNavigator.Item
              key={i}
              selected={selectedTab === v.selected}
              title={v.title}
              renderIcon={v.renderIcon}
              renderSelectedIcon={v.renderSelectedIcon}
              onPress={v.onPress}
              selectedTitleStyle={{color: '#c863b5'}}
              tabStyle={{
                backgroundColor: '#eee',
                justifyContent: 'center',
                paddingBottom: 15,
              }}
            >
              {v.component}
            </TabNavigator.Item>)}
        </TabNavigator>
      </View>

    </>
  );
};

export default Home;
