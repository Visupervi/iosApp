/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text, TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import IconFont from '../../components/IconComponent/IconFont';
import {getUserInfo} from '../../apis';
import {useNavigation} from "@react-navigation/native";
import {ListItem} from 'react-native-elements';

const My = props => {
  const [userInfo, setUserInfo] = useState({});
  const Navigation = useNavigation();
  const list = [
    {
      title:"我的动态",
      pageURI:"MyDynamic",
      iconFont:<IconFont style={{ color: "green", fontSize: 20, marginRight:10 }} name="icondongtai" />
    },
    {
      title:"谁看过我",
      pageURI: "LookMe",
      iconFont:<IconFont style={{ color: "red", fontSize: 20, marginRight:10 }} name="iconshuikanguowo" />

    },
    {
      title:"通用设置",
      pageURI: "Settings",
      iconFont:<IconFont style={{ color: "purple", fontSize: 20, marginRight:10}} name="iconshezhi" />

    },
    {
      title:"在线客服",
      pageURI:"",
      iconFont:<IconFont style={{ color: "blue", fontSize: 20, marginRight:10}} name="iconkefu" />

    }
    ]
  const Navigator = useNavigation();
  useEffect( ()=>{
    const getData = async () => {
      const res = await getUserInfo();
      if(res.code === '1000'){
        setUserInfo(res.result);
      }
    };
    getData();
  },[])

  // 渲染粉丝关注列表
  const renderFollow = props => {
    return (
      <TouchableOpacity
        onPress={() => Navigator.navigate("Follow", {type:props.type,title:props.title})}
        style={{ flex: 1, alignItems: "center", justifyContent: 'center' }} >
        <Text style={{ color: "#666", fontSize: 22 }} >{userInfo.followEachOther}</Text>
        <Text style={{ color: "#666", fontSize: 16 }} >{props.title}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <>
      <View style={{flex:1}}>
        <View style={{ height: 150, backgroundColor: "#c7689f", position: "relative" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row", paddingTop: 15,
              paddingBottom: 15, marginTop: 40
            }} >
            {/* 图片 */}
            <View style={{ paddingLeft: 15, paddingRight: 15 }}>
              <Image style={{
                width: 50, height: 50,
                borderRadius: 25
              }} source={{ uri:userInfo.header }} />
            </View>
            {/* 名称 */}
            <View style={{ flex: 2, justifyContent: "space-around" }} >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 17 }} >{userInfo.nick_name}</Text>
                <View style={{ flexDirection: "row", backgroundColor: "#fff", borderRadius: 8, paddingLeft: 3, paddingRight: 3, marginLeft: 15 }}>
                  <IconFont style={{ fontSize: 18, color: userInfo.gender === "女" ? "#b564bf" : "red" }}
                            name={userInfo.gender === "女" ? "icontanhuanv" : "icontanhuanan"} />
                  <Text style={{ color: "#555" }} >{userInfo.age}岁</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: 'center' }} >
                <IconFont style={{ color: "#fff" }} name="iconlocation" />
                <Text style={{ color: "#fff", marginLeft: 5}} >{userInfo.city}</Text>
              </View>
            </View>
            <IconFont onPress={() => Navigator.navigate("UserUpdate")} name="iconbianji" style={{ position: "absolute", top: 5, right: 20, color: "#fff", fontSize: 16 }} />
          </TouchableOpacity>
        </View>
        <View style={{
          height: 120, backgroundColor: "#fff", width: "90%", alignSelf: "center", marginTop: -15, borderRadius: 8,
          flexDirection: "row"
        }}>
          {renderFollow({type:0,title:"互相关注"})}
          {renderFollow({type:1,title:"关注"})}
          {renderFollow({type:2,title:"粉丝"})}
        </View>

        <View style={{ marginTop: 15 }}>
          {
            list.map((v,i) => {
              return (
                <ListItem
                  bottomDivider
                  onPress={()=> {Navigator.navigate(v.pageURI,{title:v.title})}}
                >
                  <ListItem.Content>
                    <ListItem.Title style={{color: "#666"}}>{v.iconFont} {v.title}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              )
            })
          }

        </View>
      </View>
    </>
  );
};

export default My;
