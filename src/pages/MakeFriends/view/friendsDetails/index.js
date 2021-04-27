/**
 * @Author visupervi
 * @Description 朋友详情路由组件
 * @Date 9:21 上午 2021/4/26
 * @Param
 * @return
 */

import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image, SafeAreaView,
  Text, TouchableOpacity,
  View,
} from 'react-native';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import {getFriendsDynamic} from '../../../../apis';
import {Carousel} from 'teaset';
import {ImageHeaderScrollView} from 'react-native-image-header-scroll-view';
import IconFont from '../../../../components/IconComponent/IconFont';
import LinearGradientBtn from '../../../../components/GradientBtnComponent/LineGradientBtn';

const FriendsDetails = props => {
  const [carousel, setCarousel] = useState([]);
  const [userDetail, setUserDetail] = useState({});
  const [dynamic, setDynamic] = useState([]);
  // 获取朋友动态信息
  useEffect(() => {
    const getData = async () => {
      const res = await getFriendsDynamic({userId: props.route.params.id});
      // console.log('detailRes', res.result.userInfo.photos);
      if (res.code === '1000') {
        setCarousel(res.result.userInfo.photos);
        setUserDetail(res.result.userInfo);
        setDynamic(res.result.userInfo.dynamic);
        // console.log(carousel.length);
        // console.log("resresult",res);
      }
    };
    getData();
  }, []);

  const handleShowAlbum = () => {
    console.log('dianji');
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
                <IconFont style={{
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
          <View style={{marginTop: 8}}>
            <Text style={{color: '#666'}}>{item.text}</Text>
          </View>

          <View style={{flexWrap: 'wrap', flexDirection: 'row', paddingTop: 5, paddingBottom: 5}}>
            {item.album.map((vv, ii) => <TouchableOpacity
                onPress={() => handleShowAlbum(ii)}
                key={ii}><Image
                style={{width: 70, height: 70, marginRight: 5}}
                source={{uri: vv.am}}/>
              </TouchableOpacity>,
            )}
          </View>

        </View>

      </>
    );
  }, [dynamic]);

  const sendLike = () => {
    console.log('xihuan');
  };

  const handlerChat = () => {
    console.log('gotoChat');
  };
  return (
    <ImageHeaderScrollView
      maxHeight={250}
      minHeight={40}
      renderForeground={() => (
        <>
          <AppHeader displayLeft={true} title={props.route.params.nickName}></AppHeader>
          {
            carousel.length > 0 ?
              <Carousel
                control
                style={{height: 250}}
              >
                {
                  carousel.map((v, i) => {
                    return (

                      <Image
                        source={{uri: v.photo}}
                        key={i * Date.now()}
                        style={{
                          width: '100%',
                          height: 250,
                        }}
                      />
                    );
                  })}</Carousel> : <></>
          }
        </>
      )}
    >
      {/*朋友信息*/}
      <View style={{flexDirection: 'row', padding: 5, borderBottomWidth: 1, borderColor: '#ccc'}}>
        <View style={{flex: 2, justifyContent: 'space-around'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#555'}}>{userDetail.nick_name}</Text>
            <IconFont style={{
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
            <Text style={{color: '#555', marginRight: 5}}>{userDetail.xueli}</Text>
            <Text style={{color: '#555', marginRight: 5}}>|</Text>
            <Text style={{color: '#555', marginRight: 5}}>{userDetail.agediff < 10 ? '年龄相仿' : '有点代沟'}</Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{position: 'relative', alignItems: 'center', justifyContent: 'center'}}>
            <IconFont name="iconxihuan" style={{fontSize: 50, color: 'red'}}/>
            <Text style={{
              position: 'absolute',
              color: '#fff',
              fontSize: 13,
              fontWeight: 'bold',
            }}>{userDetail.fateValue}</Text>
          </View>
          <Text style={{color: 'red', fontSize: 13}}>缘分值</Text>
        </View>
      </View>

      {/*标题*/}

      <View style={{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ccc',
      }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#666'}}>动态</Text>
          <View style={{
            backgroundColor: 'red', width: 16, height: 16,
            borderRadius: 8, alignItems: 'center', justifyContent: 'center',
            marginLeft: 5,
          }}>
            <Text style={{color: '#fff'}}>{10}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{marginRight: 8}}
            onPress={handlerChat}
          >
            <View style={{width: '100%', height: 30, alignSelf: 'center'}}>
              <LinearGradientBtn
                color={['#f2ab5a', '#ec7c50']}
                style={{color:"#fff"}}
              >
                <IconFont style={{color: '#fff'}} name="iconliaotian"></IconFont>
                <Text style={{color: '#fff'}}>聊一下</Text>
              </LinearGradientBtn>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginRight: 8}}
            onPress={sendLike}
          >
            <View style={{width: '100%', height: 30, alignSelf: 'center'}}>
              <LinearGradientBtn
                color={['#6d47f8', '#e56b7f']}
                style={{color:"#fff"}}
              >
                <IconFont style={{color: '#fff'}} name="iconxihuan-o"></IconFont>
                <Text style={{color: '#fff'}}>喜欢</Text>
              </LinearGradientBtn>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/*列表*/}
      {
        dynamic.length > 0 ? <FlatList
          data={dynamic}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        /> : <></>
      }


    </ImageHeaderScrollView>
  );
};
export default FriendsDetails;
