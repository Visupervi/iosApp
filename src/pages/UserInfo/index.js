/**
 * @Author visupervi
 * @Description 用户信息设置
 * @Date 3:30 下午 2021/4/19
 * @Param
 * @return
 */
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
// import {inject,observer} from "mobx-react"
import FormComponent from '../../components/FormComponent/FormComponent';


const UserInfo = props => {
  const [formObj, setFormObj] = useState({});
  return (
    <>
      <SafeAreaView>
        {/*用户性别*/}
        <View style={{padding: 10}}>
          <Text style={{fontSize: 20, color: '#666', fontWeight: 'bold'}}>填写资料</Text>
          <Text style={{fontSize: 20, color: '#666', fontWeight: 'bold', marginTop: 5}}>提升我的魅力</Text>
        </View>
        {/* 用户信息 */}
        <View style={{marginTop: 40}}>
          <FormComponent
            iconHei={50} iconWid={50}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '40%',
              alignSelf: 'center',
            }}
            formObj={formObj}
            setFormObj={setFormObj}
            // setBirthDate={setBirthDate}
          >
          </FormComponent>

        </View>

      </SafeAreaView>

    </>
  );
};
export default UserInfo;
