/**
 * @Author visupervi
 * @Description 今日佳人组件
 * @Date 3:30 下午 2021/4/19
 * @Param
 * @return
 */
import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import IconFont from '../../../components/IconComponent/IconFont';
import {getPerfectGirl} from '../../../apis/index';

const PerfectGirl = props => {
  const [perfectGirl, setPerfectGirl] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getPerfectGirl();
      if (res.status === 200) {
        setPerfectGirl(res.list);
        // temp = perfectGirl[0];
      }
    };
    getData();
  }, []);
  return (
    <>
      <View style={{flexDirection: 'row', padding: 10}}>
        {/*左部图片*/}
        <View style={{position: 'relative'}}>
          {perfectGirl.map((item, index) => {
            return (
              <Image
                key={item.id}
                style={{height: 120, width: 120}}
                source={{uri: item.header}}
              />
            );
          })}
          {perfectGirl.length > 0 ? (
            <View
              style={{
                position: 'absolute',
                left: 0,
                bottom: 5,
                backgroundColor: '#ba82c8',
                height: 25,
                width: 80,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                }}>
                今日佳人
              </Text>
            </View>
          ) : (
            <></>
          )}
        </View>
        {/*右边结构*/}
        <View style={{flex: 1, flexDirection: 'row'}}>
          {perfectGirl.length > 0 ? (
            <>
              <View
                style={{justifyContent: 'space-around', alignItems: 'center'}}>
                <Text>
                  {perfectGirl[0].nick_name} &nbsp;
                  <IconFont style={{color: 'red'}} name="icontanhuanv" />
                  &nbsp;
                  {perfectGirl[0].age}岁
                </Text>
                <Text style={{marginTop: 20}}>
                  {perfectGirl[0].marry} |&nbsp;
                  {perfectGirl[0].degree} |&nbsp;
                  {perfectGirl[0].agediff === 0 ? '年龄相仿' : '差距有点大'}
                </Text>
              </View>
            </>
          ) : (
            <></>
          )}
          {perfectGirl.length > 0 ? (
            <>
              <View
                style={{
                  justifyContent: 'center',
                  flex: 1,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconFont
                    style={{color: 'red', fontSize: 30}}
                    name="iconxin"
                  />
                  <Text
                    style={{
                      position: 'absolute',
                      color: '#fff',
                    }}>
                    {perfectGirl[0].fateValue}
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 5,
                  }}>
                  <Text>缘分值</Text>
                </View>
              </View>
            </>
          ) : (
            <></>
          )}
        </View>
      </View>
    </>
  );
};
export default PerfectGirl;
