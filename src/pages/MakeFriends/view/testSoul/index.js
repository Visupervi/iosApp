/**
 * @Author visupervi
 * @Description 测灵魂路由组件
 * @Date 3:30 下午 2021/4/19
 * @Param
 * @return
 */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text, ImageBackground, Image,
} from 'react-native';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import LinearGradientBtn from '../../../../components/GradientBtnComponent/LineGradientBtn';
import {getSurvey} from '../../../../apis';
import SwiperComponent from "../../../../components/SwiperComponent/SwiperComponent";
import {useNavigation} from "@react-navigation/native"



const TestSoul = props => {
  // const [nickName, setNickName] = useState('');
  const Navigation = useNavigation();
  const [survey, setSurvey] = useState([]);
  useEffect(() => {
    let isUnmounted = false;
    const abortController = new AbortController(); // 创建
    const getData = async () => {
      const res = await getSurvey();
      if (res.code === '1000') {
        if(!isUnmounted) setSurvey(res.list);
      }
    };
    getData();
    return () => {
      isUnmounted = true;
      abortController.abort();
    }
  }, []);
  const handlerBeginTest = () => {
    Navigation.navigate("Question");
  };
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ImageBackground
          style={{
            height: '100%',
            flex: 1,
            position: 'relative',
          }}
          imageStyle={{height: '60%'}}
          source={require('../../../../assets/images/testsoul_bg.png')}
        >
          <AppHeader displayLeft={true} title={'测灵魂'} />
          <SwiperComponent cards={survey} isUrl={false} />
          <View style={{
            width: '40%',
            height: 40,
            alignSelf: 'center',
            position: 'absolute',
            bottom: 20,
          }}>
            <LinearGradientBtn style={{color:"#fff"}}color={['#9b63cd', '#e0708c']} onPress={handlerBeginTest}>开始测试</LinearGradientBtn>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};


export default TestSoul;
