/**
 * @Author visupervi
 * @Description 人员筛选组件
 * @Date 3:30 下午 2021/4/19
 * @Param
 * @return
 */
import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IconFont from '../../../components/IconComponent/IconFont';
import SvgUri from 'react-native-svg-uri';
import {female, male} from '../../../utils/SvgIcons';
import Picker from 'react-native-picker';
import {Slider} from 'react-native-elements';
import CityJson from '../../../utils/citys.json';
import LinearGradientBtn from '../../../components/GradientBtnComponent/LineGradientBtn';

const PersonFilter = props => {
  let [gender, setGender] = useState('');
  let [lastDate, setLastDate] = useState('');
  let [distance, setDistance] = useState(0);
  let [education, setEducation] = useState('');
  let [city, setCity] = useState('');

  const [filterObj, setFilterObj] = useState({});
  // const [birthDate, setBirthDate] = useState('');
  // 性别操作
  const handlerGender = value => {
    setGender(value);
    // console.log('value');
  };
  // 最近登录时间
  const handlerSelectTime = useCallback(() => {
    Picker.init({
      pickerData: ['15分钟', '1天', '1小时', '不限制'],
      selectedValue: [lastDate],
      wheelFlex: [1, 0, 0], // 显示省和市
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '选择近期登录时间',
      onPickerConfirm: data => {
        setLastDate(data[0]);
      },
    });
    Picker.show();
  }, [lastDate]);
  // 学历操作
  const handlerEducation = useCallback(() => {
    Picker.init({
      pickerData: [
        '博士后',
        '博士',
        '硕士',
        '本科',
        '大专',
        '高中',
        '留学',
        '其他',
      ],
      selectedValue: ['其他'],
      wheelFlex: [1, 0, 0], // 显示省和市
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '选择学历',
      onPickerConfirm: data => {
        // data =  [广东，广州，天河]
        setEducation(data[0]);
      },
    });
    Picker.show();
  }, []);

  // 地址选择
  const handlerCity = useCallback(() => {
    Picker.init({
      pickerData: CityJson,
      selectedValue: ['北京', '北京'],
      wheelFlex: [1, 1, 0], // 显示省和市
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '选择城市',
      onPickerConfirm: data => {
        // data =  [广东，广州，天河]
        setCity(data[1]);
      },
    });
    Picker.show();
  }, []);

  // 条件操作
  const handlerFilter = () => {
    props.onSubmint({
      gender: gender,
      city: city,
      education: education,
      distance: distance,
      lastDate: lastDate,
    });
    props.close();
  };
  return (
    <>
      <View
        style={{
          position: 'absolute',
          height: '60%',
          width: '100%',
          padding: 10,
          bottom: 0,
          left: 0,
          backgroundColor: '#fff',
        }}>
        {/*筛选模块*/}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 50,
          }}>
          <Text />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#bbb',
            }}>
            筛选
          </Text>
          <IconFont
            style={{fontSize: 20}}
            onPress={props.close}
            name="iconshibai"
          />
        </View>
        {/*性别选择模块*/}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View style={{flex: 1}}>
            <Text style={{color: '#777', fontSize: 18, width: 80}}>性别：</Text>
          </View>
          <View style={{flex: 3, ...props.style}}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: gender === '男' ? 'red' : '#ccc',
              }}
              onPress={() => {
                setGender('男');
              }}>
              <SvgUri
                svgXmlData={male}
                width={props.iconWid}
                height={props.iconHei}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginLeft: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: gender === '女' ? 'red' : '#ccc',
              }}
              onPress={() => {
                setGender('女');
              }}>
              <SvgUri
                svgXmlData={female}
                width={props.iconWid}
                height={props.iconHei}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/*就近登录时间*/}
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text style={{color: '#777', fontSize: 18, width: 140}}>
            就近登录时间：
          </Text>
          <Text onPress={handlerSelectTime}>{lastDate || '请选择'}</Text>
        </View>
        {/*距离选择*/}
        <View style={{marginTop: 30}}>
          <Text style={{color: '#777', fontSize: 18, width: 100}}>
            距离{distance}KM
          </Text>
          <Slider
            value={distance}
            minimumValue={0}
            maximumValue={10}
            step={0.5}
            thumbStyle={{height: 10, width: 10, backgroundColor: 'transparent'}}
            onValueChange={value => {
              setDistance(value);
            }}
          />
        </View>
        {/*居住地*/}
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
          <Text style={{color: '#777', fontSize: 18, width: 100}}>居住地:</Text>
          <Text onPress={handlerCity} style={{color: '#777', fontSize: 18}}>
            {city || '请选择'}
          </Text>
        </View>
        {/*学历选择*/}
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
          <Text style={{color: '#777', fontSize: 18, width: 80}}>学历:</Text>
          <Text
            onPress={handlerEducation}
            style={{color: '#777', fontSize: 18}}>
            {education || '请选择'}
          </Text>
        </View>
        {/*确认按钮*/}
        <View
          style={{
            width: '40%',
            height: 40,
            alignSelf: 'center',
            marginTop: 50,
          }}>
          <LinearGradientBtn
            color={['#9b63cd', '#e0708c']}
            onPress={handlerFilter}
            style={{borderRadius: 20, color: '#fff'}}>
            {'确认'}
          </LinearGradientBtn>
        </View>
      </View>
    </>
  );
};
export default PersonFilter;
