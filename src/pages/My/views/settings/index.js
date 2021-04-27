/**
 * @Author visupervi
 * @Description 通用设置路由组件
 * @Date 10:16 上午 2021/4/27
 * @Param
 * @return
 */
import React from 'react';
import {
  View
} from 'react-native';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import {ListItem} from 'react-native-elements';
import LinearGradientBtn from '../../../../components/GradientBtnComponent/LineGradientBtn';
const Settings = props => {

  const list = [
    {
      title:"设置陌生人问题",
    },
    {
      title:"通知设置",
    },
    {
      title:"修改手机号",
    },
    {
      title:"黑名单",
    }]
  return (
    <View style={{flex:1}}>
      <AppHeader displayLeft={true} title={props.route.params.title}></AppHeader>
      <View style={{ marginTop: 15 }}>
        {
          list.map((v,i) => {
            return (
              <ListItem
                bottomDivider
              >
                <ListItem.Content>
                  <ListItem.Title style={{color: "#666"}}>{v.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            )
          })
        }
      </View>
      <View style={{width:"90%",height:40, alignSelf: 'center', position: "absolute", bottom:30}}>
        <LinearGradientBtn color={['#fff', '#fff']} style={{color:"#000"}}>退出登录</LinearGradientBtn>
      </View>
    </View>
  );
};

export default Settings;
