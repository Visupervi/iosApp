/**
 * @Author visupervi
 * @Description app头部组件
 * @Date 6:52 下午 2021/4/23
 * @Param
 * @return
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import IconFont from '../../components/IconComponent/IconFont';
import {useNavigation} from '@react-navigation/native';

const AppHeader = props => {
  const navigation = useNavigation();
  // goBack
  return (
    <View>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground
        source={require('../../assets/images/headbg.png')}
        style={{
          height: 80, paddingTop: 30, flexDirection: 'row',
          paddingLeft: 10, paddingRight: 10,
          alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{width: 80, flexDirection: 'row', alignItems: 'center', ...props.style}}>
          {
            props.displayLeft ? <IconFont style={{color: '#fff'}} name="iconfanhui"/> : <></>
          }

          {
            props.displayLeft ? <Text style={{color: '#fff'}}>返回</Text> : <></>
          }

        </TouchableOpacity>

        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>{props.title}</Text>

        <TouchableOpacity
          onPress={props.onRightPress || function () {
          }}
          style={{width: 80, color: '#fff', textAlign: 'right', alignItems: 'flex-end'}}>

          {props.rightText}

        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
};
export default AppHeader;
