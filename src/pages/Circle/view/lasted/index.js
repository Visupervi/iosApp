/**
 * @Author visupervi
 * @Description 圈子最新
 * @Date 2:55 下午 2021/4/26
 * @Param
 * @return
 */

import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text, TouchableOpacity, View,
} from 'react-native';
import {getFriendsDynamic} from '../../../../apis';
import {ActionSheet} from 'teaset';
import IconFont from '../../../../components/IconComponent/IconFont';

const Lasted = props => {
  const [userDetail, setUserDetail] = useState({});
  const [dynamic, setDynamic] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getFriendsDynamic();
      // console.log('detailRes', res.result.userInfo.photos);
      if (res.code === '1000') {
        setUserDetail(res.result.userInfo);
        setDynamic(res.result.userInfo.dynamic);
        // console.log(carousel.length);
        // console.log("resresult",res);
      }
    };
    getData();
  }, []);

  const handleShowAlbum = () => {
    console.log('dianjichakan ');

  };
  const handleStar = () => {
    console.log('handlerStar');
  };

  const handlerLike = () => {
    console.log('handlerLike');
  };

  const handlerComment = () => {
    console.log('handlerComment');
  };

  const noInterest = () => {
    console.log('不感兴趣');
  };

  // 渲染item
  const renderItem = useCallback(({item}) => {
    // console.log('121212121212122121212121212121');
    return (
      <>
        <View
          key={item.id}
          style={{padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1}}
        >
          <View style={{flexDirection: 'row'}}>
            <View
              style={{paddingRight: 15}}
            >
              <Image
                style={{width: 40, height: 40, borderRadius: 20}}
                source={{uri: userDetail.header}}/>
            </View>
            <View style={{flex: 2, justifyContent: 'space-around'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#555'}}>{userDetail.nick_name}</Text>
                <IconFont
                  style={{
                    marginLeft: 5,
                    marginRight: 5,
                    fontSize: 18,
                    color: userDetail.gender === '女' ? '#b564bf' : 'red',
                  }}
                  name={userDetail.gender === '女' ? 'icontanhuanv' : 'icontanhuanan'}/>
                <Text style={{color: '#555'}}>{userDetail.age}岁</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#555', marginRight: 5}}>{userDetail.marry}</Text>
                <Text style={{color: '#555', marginRight: 5}}>|</Text>
                <Text style={{color: '#555', marginRight: 5}}>{userDetail.degree}</Text>
                <Text style={{color: '#555', marginRight: 5}}>|</Text>
                <Text style={{color: '#555', marginRight: 5}}>{userDetail.agediff < 10 ? '年龄相仿' : '有点代沟'}</Text>
              </View>
            </View>

          </View>

          {/*文字开始*/}
          <View style={{marginTop: 8}}>
            <Text style={{color: '#666'}}>{item.text}</Text>
          </View>
          {/*文字结束*/}

          {/*相册开始*/}
          <View style={{flexWrap: 'wrap', flexDirection: 'row', paddingTop: 5, paddingBottom: 5}}>
            {item.album.map((vv, ii) => <TouchableOpacity
                onPress={() => handleShowAlbum(ii)}
                key={ii}><Image
                style={{width: 70, height: 70, marginRight: 5}}
                source={{uri: vv.am}}/>
              </TouchableOpacity>,
            )}
          </View>
          {/*相册结束*/}

          {/*  距离时间开始*/}
          <View style={{flexDirection: 'row', paddingTop: 5, paddingBottom: 5}}>
            <View><Text style={{color: '#666'}}>距离 {item.dist} m</Text></View>
            <View><Text style={{color: '#666', marginLeft: 8}}>{item.create_time}</Text></View>
          </View>
          {/*距离时间结束*/}

          {/*三个小图标开始*/}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {
                handleStar.bind(item);
              }}
            >
              <IconFont style={{color: '#666'}} name="icondianzan-o"/><Text
              style={{color: '#666'}}>{item.star_count}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlerComment(item);
              }}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconFont style={{color: '#666'}} name="iconpinglun"/><Text
              style={{color: '#666'}}>{item.comment_count}</Text>
            </TouchableOpacity>
          </View>
          {/*三个小图标结束*/}

        </View>

      </>
    );
  }, [dynamic]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {
        dynamic.length > 0 ? <FlatList
          data={dynamic}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        /> : <></>
      }
    </SafeAreaView>
  );
};

export default Lasted;
