/**
 * @Author visupervi
 * @Description 字体图标组件
 * @Date 8:27 上午 2021/4/22
 * @Param
 * @return
 */
import React from 'react';
import {Text} from 'react-native';
import IconMap from '../../utils/icon';
//  <IconFont name="xihuan" />

const IconFont = props => (
  <Text
    onPress={props.onPress}
    style={{fontFamily: 'iconfont', ...props.style}}>
    {IconMap[props.name]}
  </Text>
);
export default IconFont;
