/**
 * @Author visupervi
 * @Description  用户信息设置form组件
 * @Date 3:29 下午 2021/4/19
 * @Param
 * @return
 */
import React, {useCallback} from 'react';
import DatePicker from 'react-native-datepicker';
// import {inject, observer} from "mobx-react"
import {useNavigation} from "@react-navigation/native";
import {
  TouchableOpacity,
  View,
} from 'react-native';
import {Input} from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';
import {female, male} from '../../utils/SvgIcons';
// import ImagePicker from "react-native-image-crop-picker";
import Toast from "../../utils/Toast";
import LinearGradientBtn from '../GradientBtnComponent/LineGradientBtn';

const FormComponent = props => {
  // console.log("props",props.appStore.setUserInfo);
  const Navigation = useNavigation();
  const {formObj, setFormObj} = props;
  const data = Object.assign({}, formObj);
  const currentDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
  // data["birthDate"] = currentDate;
  // 昵称
  const handlerNickName = useCallback(value => {
    console.log("nickName", data);
    data["nickName"] = value;
    setFormObj(data);
  }, [formObj]);

  // 性别
  const handlerGender = useCallback(value => {
    data["gender"] = value;
    setFormObj(data);
  }, [formObj]);

  // 生日
  const handlerBirthDate = useCallback(date => {
    data["birthDate"] = date;
    setFormObj(data);
  }, [formObj]);

  // 地址
  const handlerChangeCity = useCallback(value => {
    data["address"] = value;
    setFormObj(data);
  }, [formObj]);

  // 头像
  const handlerAvatar = useCallback(() => {
    if(data.gender === "" || data.address === "" || data.birthDate === "" || data.nickName === "" || Object.keys(data).length === 0) {
      Toast.sad("性别或者地址或者生日或者昵称不能为空哦",2000, "top");
    } else {
      Navigation.navigate("Home")
      // handlerImage().then(res => {
      //   console.log("res", res);
      // });
    }
  },[]);

  // 处理头像图片函数
  //
  // const handlerImage = async () => {
  //   const res = await ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true
  //   })
  // }
  return (
    <>
      <View style={{...props.style}}>
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: data['gender'] === '男' ? 'red' : '#ccc',
          }}
          onPress={() => {
            handlerGender('男');
          }}
        >
          <SvgUri svgXmlData={male} width={props.iconWid} height={props.iconHei}></SvgUri>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: data.gender === '女' ? 'red' : '#ccc',
        }}
        onPress={() => {
          handlerGender('女');
        }}
        >
          <SvgUri svgXmlData={female} width={props.iconWid} height={props.iconHei}></SvgUri>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30}}>
        <Input
          placeholder={'昵称设置'}
          value={formObj.nickName}
          onChangeText={(nickname) => {
            handlerNickName(nickname);
          }}
        >
        </Input>
      </View>
      <View>
        <DatePicker
          style={{width: '100%', padding: 10}}
          mode="date"
          date={formObj.birthDate}
          placeholder="设置生日"
          format="YYYY-MM-DD"
          confirmBtnText="确认"
          cancelBtnText="取消"
          androidMode="spinner"
          minDate="1900-01-01"
          maxDate={currentDate}
          customStyles={{
            dateIcon: {
              display: 'none',
            },
            dateInput: {
              borderWidth: 0,
              borderBottomWidth: 1.2,
              alignItems: 'flex-start',
              paddingLeft: 6,
              textAlign: 'left',
            },
            placeholderText: {
              fontSize: 18,
              color: '#afafaf',
            },
          }}
          onDateChange={(date) => {
            handlerBirthDate(date);
          }}
        />
      </View>
      <View style={{marginTop: 30}}>
        <Input
          placeholder={'设置地址'}
          value={formObj.address}
          onChangeText={handlerChangeCity}
        >
        </Input>
      </View>
      <View style={{width: '90%', height: 40, alignSelf: 'center'}}>
        <LinearGradientBtn color={['#9b63cd', '#e0708c']} style={{color:"#fff"}} onPress={handlerAvatar}>设置头像</LinearGradientBtn>
      </View>
    </>
  );
};
export default FormComponent;
