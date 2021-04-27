import React, {Component} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import IconFont from '../../../components/IconComponent/IconFont';

const GroupTabbar = props => {
  const {goToPage, tabs, activeTab} = props;
  // goToPage 函数 负责跳转页面
  // tabs 标题数组
  // activeTab 当前激活选中的索引
  return (
    <ImageBackground
      style={{
        height: 100, flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 20,
        justifyContent: 'space-evenly',
      }}
      source={require('../../../assets/images/rectanglecopy.png')}
    >
      {
        props.isBack ?
          <IconFont name="iconfanhui"
                    style={{
                      color: '#fff', fontSize: 20,
                      position: 'absolute', left: 10, bottom: 30,
                    }}
                    onPress={props.onPress}
          /> :
          <></>
      }

      {tabs.map((v, i) => <TouchableOpacity
        key={i}
        onPress={() => goToPage(i)}
        style={{
          justifyContent: 'center',
          borderBottomColor: '#fff',
          borderBottomWidth: activeTab === i ? 3 : 0,
        }}
      >
        <Text
          style={{color: '#fff', fontSize: activeTab === i ? 26 : 20}}
        >{v}</Text>
      </TouchableOpacity>)}
    </ImageBackground>
  );
};
export default GroupTabbar;
