/**
 * @Author visupervi
 * @Description 我的路由组件
 * @Date 3:30 下午 2021/4/19
 * @Param
 * @return
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground, ScrollView, Image,
} from 'react-native';
import {inject, observer} from 'mobx-react';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import LinearGradientBtn from '../../../../components/GradientBtnComponent/LineGradientBtn';

const TestResult = props => {
  // const [nickName, setNickName] = useState('');
  // const [birthDate, setBirthDate] = useState('');
  const handlerContinue = () => {
    console.log('继续测试');
  };
  return (
    <>
      <ImageBackground
        style={{flex: 1, width: '100%'}}
        source={require('../../../../assets/images/qabg.png')}
      >
        <AppHeader displayLeft={true} title={'测试结果'}/>
        <ImageBackground
          style={{flex: 1, width: '100%', position: 'relative'}}
          resizeMode="stretch"
          source={require('../../../../assets/images/result.png')}
        >

          <Text style={{
            position: 'absolute', top: '1%', left: '6%', color: '#ffffff9a', letterSpacing: 7,
          }}>灵魂基因鉴定单</Text>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between',
            width: '47%', position: 'absolute', top: '6%', right: '5%',
          }}>
            <Text style={{color: '#fff', fontSize: 16}}>[</Text>
            <Text style={{color: '#fff', fontSize: 16}}>独孤求败</Text>
            <Text style={{color: '#fff', fontSize: 16}}>]</Text>
          </View>
          <ScrollView
            style={{
              width: '47%',
              position: 'absolute', right: '5%', top: '12%',
              height: '26%',
            }}
          >
            <Text style={{color: '#fff'}}>usestate里面的set方法是异步的，但是我想把他变成同步的，该怎么做？？change => setfields => fields改变 =>
              组件从新render
              是这样一个流程。
              你想获得渲染后新的fields的值，你需要在useEffect中获取到。
              react的setState是不能变成同步的, 不论是在函数组件或是class组件此处只是set state之后的一个回调, 实际上是等组件重新render再执行, 因此还是异步的
              若是想监听useState某个值, 可以使用副作用钩子:</Text>
          </ScrollView>

          <View style={{position: 'absolute', left: '5%', top: '45%'}}>
            <Text style={{color: '#ffffff9a'}}>外向</Text>
            <Text style={{color: '#ffffff9a'}}>60%</Text>
          </View>
          <View style={{position: 'absolute', left: '5%', top: '51%'}}>
            <Text style={{color: '#ffffff9a'}}>判断</Text>
            <Text style={{color: '#ffffff9a'}}>70%</Text>
          </View>
          <View style={{position: 'absolute', left: '5%', top: '57%'}}>
            <Text style={{color: '#ffffff9a'}}>抽象</Text>
            <Text style={{color: '#ffffff9a'}}>80%</Text>
          </View>
          <View style={{position: 'absolute', right: '5%', top: '45%'}}>
            <Text style={{color: '#ffffff9a'}}>理性</Text>
            <Text style={{color: '#ffffff9a'}}>100%</Text>
          </View>

          <Text style={{
            color: '#ffffff9a', position: 'absolute', left: '5%',
            top: '65%',
          }}>与你相似</Text>

          <ScrollView
            horizontal={true}
            contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}
            style={{position: 'absolute', width: '96%', height: '11%', left: '2%', top: '72%'}}
          >
            <Image
              style={{marginLeft: 5, width: 50, height: 50, borderRadius: 25}}
              source={{uri: 'https://pic.netbian.com/uploads/allimg/190925/202046-15694140468f9d.jpg'}}/>
            <Image
              style={{marginLeft: 5, width: 50, height: 50, borderRadius: 25}}
              source={{uri: 'https://pic.netbian.com/uploads/allimg/190925/202046-15694140468f9d.jpg'}}/>
            <Image
              style={{marginLeft: 5, width: 50, height: 50, borderRadius: 25}}
              source={{uri: 'https://pic.netbian.com/uploads/allimg/190925/202046-15694140468f9d.jpg'}}/>
            <Image
              style={{marginLeft: 5, width: 50, height: 50, borderRadius: 25}}
              source={{uri: 'https://pic.netbian.com/uploads/allimg/190925/202046-15694140468f9d.jpg'}}/>
            <Image
              style={{marginLeft: 5, width: 50, height: 50, borderRadius: 25}}
              source={{uri: 'https://pic.netbian.com/uploads/allimg/190925/202046-15694140468f9d.jpg'}}/>
            <Image
              style={{marginLeft: 5, width: 50, height: 50, borderRadius: 25}}
              source={{uri: 'https://pic.netbian.com/uploads/allimg/190925/202046-15694140468f9d.jpg'}}/>
            <Image
              style={{marginLeft: 5, width: 50, height: 50, borderRadius: 25}}
              source={{uri: 'https://pic.netbian.com/uploads/allimg/190925/202046-15694140468f9d.jpg'}}/>
            <Image
              style={{marginLeft: 5, width: 50, height: 50, borderRadius: 25}}
              source={{uri: 'https://pic.netbian.com/uploads/allimg/190925/202046-15694140468f9d.jpg'}}/>
            <Image
              style={{marginLeft: 5, width: 50, height: 50, borderRadius: 25}}
              source={{uri: 'https://pic.netbian.com/uploads/allimg/190925/202046-15694140468f9d.jpg'}}/>
            <Image
              style={{marginLeft: 5, width: 50, height: 50, borderRadius: 25}}
              source={{uri: 'https://pic.netbian.com/uploads/allimg/190925/202046-15694140468f9d.jpg'}}/>
          </ScrollView>
          <View style={{
            width: '90%',
            height: 40,
            alignSelf: 'center',
            position: 'absolute',
            bottom: 20,

          }}>
            <LinearGradientBtn style={{color: '#fff'}} color={['#9b63cd', '#e0708c']}
                               onPress={handlerContinue}>继续测试</LinearGradientBtn>
          </View>
        </ImageBackground>
      </ImageBackground>
    </>
  );
};
export default TestResult;
