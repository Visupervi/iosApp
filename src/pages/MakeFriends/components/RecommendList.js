/**
 * @Author visupervi
 * @Description 推荐列表组件
 * @Date 3:30 下午 2021/4/19
 * @Param
 * @return
 */
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity, FlatList,
} from 'react-native';
import {getRecommendsList} from '../../../apis/index';
import IconFont from '../../../components/IconComponent/IconFont';
import {useNavigation} from "@react-navigation/native";

const RecommendList = props => {
  // console.log("props", props);
  const Navigator = useNavigation();
  const [recommendList, setRecommendList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getRecommendsList();
      if (res.status === 200) {
        setRecommendList(res.list);
      }
    };
    getData();
  }, []);

  const renderItem = useCallback((item) => {
    return (
      <TouchableOpacity
        key={item.item.id}
        style={{
          marginTop:5,
          flexDirection:"row",
          borderBottomWidth:1,
          borderBottomColor:"#ccc",
          padding: 10
        }}
        onPress={()=>{Navigator.navigate("FriendsDetails",{id:item.item.id,nickName:item.item.nick_name})}}
      >
        <View style={{position: 'relative'}}>
          <Image style={{height: 60, width: 60, borderRadius:30}} source={{uri: item.item.header}}></Image>
        </View>
        {/*右边结构*/}
        <View style={{flex: 1, flexDirection: 'row', marginLeft:5}}>
          <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
            <Text>
              {item.item.nick_name} &nbsp;
              <IconFont style={{color: 'red'}} name="icontanhuanv"></IconFont>&nbsp;
              {item.item.age}岁
            </Text>
            <Text style={{marginTop: 2}}>
              {item.item.marry} |&nbsp;
              {item.item.degree} |&nbsp;
              {item.item.agediff === 0 ? '年龄相仿' : '差距有点大'}
            </Text>
          </View>
          <View style={{
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
          }}>
            <View style={{
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <IconFont style={{color: 'red', fontSize: 30}} name="iconxin"></IconFont>
              <Text style={{
                position: 'absolute',
                color: '#fff',
              }}>{item.item.fateValue}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  })
  // const [birthDate, setBirthDate] = useState('');
  return (
    <>
      <View style={{flex:1}}>
        {/*左部图片*/}
        {
          recommendList.length > 0 ?
            // recommendList.map((item, index) => {
            //   return (
            //     <TouchableOpacity
            //       key={item.id}
            //       style={{
            //       marginTop:5,
            //       flexDirection:"row",
            //       borderBottomWidth:1,
            //       borderBottomColor:"#ccc",
            //       paddingBottom: 5,
            //       paddingTop: 5,
            //     }}
            //       onPress={()=>{Navigator.navigate("FriendsDetails",{id:item.id,nickName:item.nick_name})}}
            //     >
            //       <View style={{position: 'relative'}}>
            //         <Image style={{height: 60, width: 60, borderRadius:30}} source={{uri: item.header}}></Image>
            //       </View>
            //       {/*右边结构*/}
            //       <View style={{flex: 1, flexDirection: 'row', marginLeft:5}}>
            //         <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
            //           <Text>
            //             {item.nick_name} &nbsp;
            //             <IconFont style={{color: 'red'}} name="icontanhuanv"></IconFont>&nbsp;
            //             {item.age}岁
            //           </Text>
            //           <Text style={{marginTop: 2}}>
            //             {item.marry} |&nbsp;
            //             {item.degree} |&nbsp;
            //             {item.agediff === 0 ? '年龄相仿' : '差距有点大'}
            //           </Text>
            //         </View>
            //         <View style={{
            //           justifyContent: 'center',
            //           flex: 1,
            //           alignItems: 'center',
            //         }}>
            //           <View style={{
            //             position: 'relative',
            //             justifyContent: 'center',
            //             alignItems: 'center',
            //           }}>
            //             <IconFont style={{color: 'red', fontSize: 30}} name="iconxin"></IconFont>
            //             <Text style={{
            //               position: 'absolute',
            //               color: '#fff',
            //             }}>{item.fateValue}</Text>
            //           </View>
            //         </View>
            //       </View>
            //     </TouchableOpacity>
            //   );
            // }) :
            <FlatList
              data={recommendList}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            >
            </FlatList> :
            <></>
        }
      </View>
    </>
  );
}
export default RecommendList;
