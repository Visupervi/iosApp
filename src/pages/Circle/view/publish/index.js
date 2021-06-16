/**
 * @Author visupervi
 * @Description 动态发布页面
 * @Date 3:56 下午 2021/4/26
 * @Param
 * @return
 */
import React from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import AppHeader from '../../../../components/AppHeader/AppHeader';

const Publish = props => {
  return (
    <>
      <View style={{flex: 1}}>
        <AppHeader displayLeft={true} title={'发动态'} />
        <TouchableOpacity style={{height: '40%'}}>
          <TextInput placeholder={'请填写动态（140字以内）'} multiline={true} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Publish;
