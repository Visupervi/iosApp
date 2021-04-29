/**
 * @Author visupervi
 * @Description 探花路由组件
 * @Date 3:30 下午 2021/4/19
 * @Param
 * @return
 */
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View
} from 'react-native';
import AppHeader from "../../../../components/AppHeader/AppHeader";
import SwiperComponent from "../../../../components/SwiperComponent/SwiperComponent";
import {getCards} from '../../../../apis';

const SearchFlower = props => {
  // const [nickName, setNickName] = useState('');
  const [cards, setCards] = useState([]);
  // const [birthDate, setBirthDate] = useState('');
  useEffect(() => {
    let isUnmounted = false;
    const abortController = new AbortController(); // 创建
    const getData = async () => {
      let res = await getCards();
      if (res.code === '1000') {
        if(!isUnmounted)  setCards(res.list);
      }
    };
    getData();
    return () => {
      isUnmounted = true;
      abortController.abort();
    }
  }, []);
  return (
    <>
      <View style={{flex: 1, backgroundColor: "#fff"}}>
        <AppHeader displayLeft={true} title={"探花"}/>
        <ImageBackground
          style={{ height: "60%" }}
          imageStyle={{ height: "100%" }}
          source={require("../../../../assets/images/testsoul_bg.png")}
        >
          <View>
            <SwiperComponent cards={cards} isUrl={true} />
          </View>
        </ImageBackground>
      </View>
    </>
  );
};


export default SearchFlower;
