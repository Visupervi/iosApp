/**
 * @Author visupervi
 * @Description react-native Index
 * @Date 3:11 下午 2021/4/17
 * @Param
 * @return
 */
import React, {useState, useCallback, useEffect} from 'react';
import {View, StatusBar, Image, Text} from 'react-native';
import {Input} from 'react-native-elements';
import {validatePhone} from '../../utils/validator';
import LinearGradientBtn from '../../components/GradientBtnComponent/LineGradientBtn';
import CodeFieldInput from '../../components/CodeComponent/CodeFieldInput';
import {login, checkCode} from '../../apis/index';
import {useNavigation} from '@react-navigation/native';
import Toast from '../../utils/Toast';

const Login = props => {
  const Navigation = useNavigation();
  const [phone, setPhone] = useState('15554332761');
  const [phoneFlag, setPhoneFlag] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const [value, setValue] = useState('');
  const [isClick, setIsClick] = useState(false);
  const [btnText, setBtnText] = useState('重新获取');
  // 手机号提交函数
  const handlerSubmit = useCallback(
    async e => {
      setPhoneFlag(validatePhone(phone));
      if (!validatePhone(phone)) {
        return;
      }
      const result = await login();
      console.log('result', result);
      if (result.status === 200) {
        setShowLogin(false);
        countNum();
      } else {
        setShowLogin(true);
      }
    },
    [phone],
  );

  // 渲染登录组件

  const renderLogin = () => {
    return (
      <>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 20, color: '#888', fontWeight: 'bold'}}>
            手机号注册登录
          </Text>
          <View style={{marginTop: 30}}>
            <Input
              placeholder="请输入手机号"
              maxLength={11}
              value={phone}
              keyboardType="name-phone-pad"
              inputStyle={{color: '#888'}}
              onChangeText={handlerChange}
              onSubmitEditing={handlerSubmit}
              errorMessage={phoneFlag ? '' : '手机号格式不正确'}
              returnKeyType="send"
              leftIcon={{
                type: 'font-awesome',
                name: 'phone',
                color: '#ccc',
                size: 20,
              }}
            />
          </View>
        </View>
        <View style={{width: '90%', height: 40, alignSelf: 'center'}}>
          <LinearGradientBtn
            style={{color: '#fff', borderRadius: 20}}
            color={['#9b63cd', '#e0708c']}
            onPress={handlerSubmit}>
            获取验证码
          </LinearGradientBtn>
        </View>
      </>
    );
  };

  // 渲染验证码组件

  const renderCode = props => {
    return (
      <>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 20, color: '#888', fontWeight: 'bold'}}>
            请输入六位验证码
          </Text>
          <Text style={{marginTop: 30}}>已发送至+86 {phone}</Text>
          <View>
            <CodeFieldInput
              value={value}
              onPress={setValue}
              onSubmit={handlerOnsubmit}
            />
          </View>
        </View>
        <View
          style={{
            width: '90%',
            height: 40,
            alignSelf: 'center',
            marginTop: 50,
          }}>
          <LinearGradientBtn
            disable={isClick}
            color={['#9b63cd', '#e0708c']}
            onPress={handlerSubmit}
            style={{borderRadius: 20, color: '#fff'}}>
            {btnText}
          </LinearGradientBtn>
        </View>
      </>
    );
  };

  // 手机号修改函数
  const handlerChange = useCallback(value => {
    setPhone(value);
  }, []);

  // 倒计时函数

  const countNum = () => {
    let seconds = 10;
    let timerId = setInterval(() => {
      seconds--;
      setIsClick(true);
      setBtnText(`重新获取（${seconds}）S`);
      if (seconds === 0) {
        setIsClick(false);
        clearInterval(timerId);
        setBtnText('重新获取');
      }
    }, 1000);
  };

  // 验证码交验提交

  const handlerOnsubmit = async e => {
    e.preventDefault();
    if (value.length < 6) {
      Toast.message('验证码格式不正确', 3000, 'center');
      return;
    }
    let res = await checkCode({
      phone: phone,
      code: value,
    });
    if (res.status === 200) {
      if (res.isNew) {
        Navigation.navigate('UserInfo');
      } else {
        // alert("老用户");
      }
    }
  };

  return (
    <>
      <View style={{flex: 1}}>
        {/*设置标题栏*/}
        <StatusBar backgroundColor="transparent" trunslucent={true} />

        {/*设置背景颜色*/}
        <Image
          style={{width: '100%', height: 200}}
          source={require('../../assets/images/profileBackground.jpg')}
        />

        {/*设置登录框 */}
        {showLogin ? renderLogin() : renderCode()}
      </View>
    </>
  );
};

export default Login;
