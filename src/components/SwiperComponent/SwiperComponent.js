/**
 * @Author visupervi
 * @Description Swiper组件
 * @Date 3:30 下午 2021/4/19
 * @Param
 * @return
 */
import React, {useCallback, useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {getCards} from '../../apis/index';
import IconFont from '../IconComponent/IconFont';

const SwiperComponent = props => {
  // console.log("props", props);
  const swiperRef = React.createRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const stackSize = 6;
  const handlerNextData = useCallback(currentIndex => {
    // let temp = [...tepArr.slice((currentIndex * stackSize - stackSize), stackSize*currentIndex)];
    // console.log("tem", temp);
    // setCards([...cards,...temp]);
  }, []);

  const handlerIsLike = value => {
    console.log('ref', value);
    // value === "like" ? swiperRef.swipeRight() : swiperRef.current.swipeLeft();
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          position: 'relative',
        }}>
        {props.cards.length > 0 ? (
          <View style={{position: 'relative', flex: 1}}>
            <Swiper
              cards={props.cards}
              renderCard={(card, index) => {
                return (
                  <View style={styles.card}>
                    {props.isUrl ? (
                      <Image
                        key={card.id}
                        source={{uri: card.header}}
                        resizeMode={'contain'}
                        style={{width: '100%', height: '80%'}}
                      />
                    ) : (
                      <Image
                        key={card.id}
                        source={require('../../assets/images/1.png')}
                        resizeMode={'contain'}
                        style={{width: '100%', height: '80%'}}
                      />
                    )}

                    {card.age ? (
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          justifyContent: 'space-around',
                        }}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={{color: '#555'}}>{card.nick_name}</Text>
                          <IconFont
                            style={{
                              fontSize: 18,
                              color: card.gender === '女' ? '#b564bf' : 'red',
                            }}
                            name={
                              card.gender === '女'
                                ? 'icontanhuanv'
                                : 'icontanhuanan'
                            }
                          />
                          <Text style={{color: '#555'}}>{card.age}岁</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={{color: '#555'}}>{card.marry}</Text>
                          <Text style={{color: '#555'}}>|</Text>
                          <Text style={{color: '#555'}}>{card.degree}</Text>
                          <Text style={{color: '#555'}}>|</Text>
                          <Text style={{color: '#555'}}>
                            {card.agediff < 10 ? '年龄相仿' : '有点代沟'}
                          </Text>
                        </View>
                      </View>
                    ) : (
                      <>
                        <Text />
                      </>
                    )}
                  </View>
                );
              }}
              onSwiped={cardIndex => {
                setCurrentIndex(cardIndex + 1);
              }}
              onSwipedAll={() => {
                handlerNextData(currentIndex);
              }}
              cardIndex={currentIndex}
              onSwipedLeft={() => {
                handlerIsLike('dislike');
              }}
              onSwipedRight={() => {
                handlerIsLike('like');
              }}
              backgroundColor={'transparent'}
              cardVerticalMargin={30}
              stackSize={stackSize}
            />
          </View>
        ) : (
          <></>
        )}
        {/* 两个小图标 */}
        {props.cards.length > 0 &&
        currentIndex < props.cards.length &&
        props.isUrl ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '60%',
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                handlerIsLike('dislike');
              }}
              style={{
                backgroundColor: '#ebc869',
                width: 60,
                height: 60,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <IconFont
                style={{fontSize: 30, color: '#fff'}}
                name="iconbuxihuan"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlerIsLike('like');
              }}
              style={{
                backgroundColor: '#fd5213',
                width: 60,
                height: 60,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <IconFont
                style={{fontSize: 30, color: '#fff'}}
                name="iconxihuan"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    height: '70%',
    borderWidth: 2,
    borderColor: '#E8E8E8',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});
export default SwiperComponent;
