/**
 * @Author visupervi
 * @Description 用户性别Svg设置组件
 * @Date 3:29 下午 2021/4/19
 * @Param
 * @return
 */
import React, {useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {female, male} from '../../utils/SvgIcons';

const SvgIcons = props => {
  const {formObj, setGender} = props;
  console.log("formObj", formObj);
  const data = {...formObj};
  const handlerGender = useCallback((value)=>{
    data["gender"] = value;
    setGender(data);
  },[data.gender])
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
            backgroundColor: data.gender === "男" ? "red" : '#ccc'
          }}
          onPress={()=>{handlerGender("男")}}
        >
          <SvgUri svgXmlData={male} width={props.iconWid} height={props.iconHei}></SvgUri>
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: data.gender === "女" ? "red" : '#ccc'
        }}
         onPress={()=>{handlerGender("女")}}
        >
          <SvgUri svgXmlData={female} width={props.iconWid} height={props.iconHei}></SvgUri>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default SvgIcons;
