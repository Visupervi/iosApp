/**
 * @Author visupervi
 * @Description 消息路由组件
 * @Date 5:53 下午 2021/4/27
 * @Param
 * @return
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text, TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import AppHeader from '../../components/AppHeader/AppHeader';
import IconFont from '../../components/IconComponent/IconFont';
import {getMessageList} from "../../apis"
const Message = props => {
  const [messageList, setMessageList] = useState([]);
  const handlerRightPress = () => {
    console.log("dianjiyoubian")
  }
  useEffect(()=>{
    const getData = async () => {
      const res = await getMessageList();
      if(res.code === "1000"){
        setMessageList(res.list);
      }
    }
    getData();
  },[])

  const renderItem = (item) => {
    console.log("ite", item);
    return(
      <TouchableOpacity
        onPress={() => {console.log("12323232")}}
        key={item.id} style={{ padding: 15, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#ccc" }} >
        <View>
          <Image
          source={{ uri: item.item.header }}
          style={{ width: 54, height: 54, borderRadius: 27}} />
        </View>
        <View style={{ justifyContent: "space-evenly", paddingLeft: 15 }}>
          <Text style={{ color: "#666" }} >{item.item.username}</Text>
          <Text style={{ color: "#666" }} >{item.item.sign}</Text>
        </View>
        <View style={{ justifyContent: "space-evenly", flex: 1, alignItems: "flex-end" }}>
          <Text style={{ color: "#666" }} >{}</Text>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center" }}>
            <Text style={{ color: "#fff" }}>{item.item.message.length}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <>
      <View>
        <AppHeader
          displayLeft={false}
          title={'消息'}
          rightText={<IconFont name="icontongxunlu" style={{ color: "#fff", fontSize: 20 }} />}
          onRightPress={handlerRightPress}
        />

        <View style={{
          flexDirection: "row", justifyContent: "space-between",
          paddingTop: 10, paddingBottom: 10, paddingLeft: 30, paddingRight: 30,
          borderBottomWidth: 3, borderBottomColor: "#dce2e5"
        }}>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View style={{
              width: 60, height: 60, borderRadius: 30,
              backgroundColor: "#ebc969", alignItems: 'center', justifyContent: 'center'
            }}>
              <IconFont style={{ color: "#fff", fontSize: 24 }} name="icongonggao" />
            </View>
            <Text style={{ color: "#666", marginTop:5 }}>全部</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View style={{
              width: 60, height: 60, borderRadius: 30,
              backgroundColor: "#ff5314", alignItems: 'center', justifyContent: 'center'
            }}>
              <IconFont style={{ color: "#fff", fontSize: 24 }} name="icondianzan-o" />
            </View>
            <Text style={{ color: "#666", marginTop:5 }}>点赞</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View style={{
              width: 60, height: 60, borderRadius: 30,
              backgroundColor: "#2fb4f9", alignItems: 'center', justifyContent: 'center'
            }}>
              <IconFont style={{ color: "#fff", fontSize: 24 }} name="iconpinglun" />
            </View>
            <Text style={{ color: "#666", marginTop:5 }}>评论</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <View style={{
              width: 60, height: 60, borderRadius: 30,
              backgroundColor: "#1adbde", alignItems: 'center', justifyContent: 'center'
            }}>
              <IconFont style={{ color: "#fff", fontSize: 24 }} name="iconxihuan-o" />
            </View>
            <Text style={{ color: "#666", marginTop:5 }}>喜欢</Text>
          </TouchableOpacity>
        </View>

        {
          messageList.length > 0 ?
            <FlatList
              data={messageList}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            /> : <></>
        }
      </View>
    </>
  );
}

export default Message;
