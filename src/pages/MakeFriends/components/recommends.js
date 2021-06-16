/**
 * @Author visupervi
 * @Description 最近来访组件
 * @Date 3:30 下午 2021/4/19
 * @Param
 * @return
 */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {getRecommends} from '../../../apis';

const Recommend = props => {
  const [recommends, setRecommends] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await getRecommends({
        phone: '15554332761',
        token: '12345678888888',
      });
      if (res.status === 200) {
        setRecommends(res.list);
      }
      // console.log("res", res);
    };
    getData();
  }, []);

  // const [nickName, setNickName] = useState('');
  // const [birthDate, setBirthDate] = useState('');
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
          padding: 10,
        }}>
        <Text style={{flex: 1}}>
          最近有{recommends.length}人来访，快去查看...
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {recommends.map((item, index) => {
            return (
              <Image
                key={item.id}
                source={{uri: item.header}}
                style={{width: 40, height: 40, borderRadius: 20}}
              />
            );
          })}
          <Text> > </Text>
        </View>
      </View>
    </>
  );
};
export default Recommend;
