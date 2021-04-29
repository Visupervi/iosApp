/**
 * @Author visupervi
 * @Description 试题路由组件
 * @Date 3:30 下午 2021/4/19
 * @Param
 * @return
 */
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {inject, observer} from 'mobx-react';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import LinearGradientBtn from '../../../../components/GradientBtnComponent/LineGradientBtn';
import {getQuestionList} from '../../../../apis';
import {useNavigation} from "@react-navigation/native"

const Question = props => {
  const Navigation = useNavigation();
  const [answer, setAnswer] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  let [currentIndex, setCurrentIndex] = useState(0);
  const [currentQ, setCurrentQ] = useState({});
  let tempAnswer = [];
  const getData = async () => {
    const res = await getQuestionList();
    if (res.code === '1000') {
      setQuestionList(res.list);
    }
  }
  useEffect( () => {
    getData();
  }, []);

  const nextQuestion = value => {
    setAnswer([
      ...answer,
      value
    ]);
  };

  useEffect(()=> {
    if(questionList.length > 0) {
      if (currentIndex >= questionList.length -1) {
        console.log("提交答案",answer);
        Navigation.navigate("TestResult");

      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }
  },[answer])
  return (
    <>
      <View style={{position: 'relative', width: '100%', height: '100%'}}>
        <ImageBackground
          style={{flex: 1, height: '100%'}}
          source={require('../../../../assets/images/qabg.png')}
        >
          <AppHeader displayLeft={true} title={'初级灵魂测试题'} />
          <View style={{marginTop: 60, flexDirection: 'row', justifyContent: 'space-between'}}>
            <ImageBackground
              style={{
                width: 66, height: 52, justifyContent: 'center', alignItems: 'flex-end',
              }}
              source={require('../../../../assets/images/qatext.png')}
            >
            </ImageBackground>
            <ImageBackground
              style={{
                width: 66, height: 52, justifyContent: 'center', alignItems: 'flex-end',
              }}
              source={require('../../../../assets/images/leve1.png')}
            >
            </ImageBackground>
          </View>
          {
            questionList.length > 0 ?
              <View style={{
                position: 'absolute', width: '80%', top: 162,
                alignSelf: 'center', alignItems: 'center',
              }}>
                <View>
                  <Text style={{color: '#fff', fontSize: 26, fontWeight: 'bold'}}>第{currentIndex + 1}题</Text>
                  <Text style={{color: '#ffffff9a', textAlign: 'center'}}>{currentIndex +1 }/ {questionList.length}</Text>
                </View>

                <Text
                  style={{
                    marginTop: 30,
                    fontSize: 14, color: '#fff', fontWeight: 'bold',
                  }}>
                  {questionList[currentIndex].question_title}
                </Text>
                <View style={{width: '100%', marginTop: 30}}>
                  {
                    questionList[currentIndex].answers.map((item, index)=>{
                      return (
                        <LinearGradientBtn
                          style={{height: 40, marginTop: 30, color:"#FFF"}}
                          color={['#6f45f3', '#6f45f31a']}
                          key={index}
                          onPress={() => { nextQuestion(item.ans_No) }}
                        >
                          <Text style={{color: '#fff'}}>{item.ans_title}</Text>
                        </LinearGradientBtn>
                      )
                    })
                  }
                </View>
              </View> :
              <></>
          }
        </ImageBackground>
      </View>
    </>
  )
}
export default Question;
