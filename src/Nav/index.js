/**
 * @Author visupervi
 * @Description 路由组件
 * @Date 3:33 下午 2021/4/19
 * @Param
 * @return
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Test from "../pages/Test";
import Home from "../pages/Home";
import Login from "../pages/login";
import UserInfo from "../pages/UserInfo";
import SearchNear from '../pages/MakeFriends/view/searchNear';
import SearchFlower from '../pages/MakeFriends/view/searchFlower';
import Question from '../pages/MakeFriends/view/question';
import TestResult from '../pages/MakeFriends/view/questionResult';
import TestSoul from '../pages/MakeFriends/view/testSoul';
import FriendsDetails from "../pages/MakeFriends/view/friendsDetails";
import Publish from '../pages/Circle/view/publish';
import UserUpdate from '../pages/My/views/userUpdate';
import Follow from '../pages/My/views/follow';
import LookMe from '../pages/My/views/lookMe';
import MyDynamic from '../pages/My/views/myDynamic';
import Settings from '../pages/My/views/settings';
const Stack = createStackNavigator();
const Nav = props => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Test" component={Test}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="UserInfo" component={UserInfo}/>
        <Stack.Screen name="SearchFlower" component={SearchFlower}/>
        <Stack.Screen name="SearchNear" component={SearchNear}/>
        <Stack.Screen name="Question" component={Question}/>
        <Stack.Screen name="TestResult" component={TestResult}/>
        <Stack.Screen name="TestSoul" component={TestSoul}/>
        <Stack.Screen name="Publish" component={Publish}/>
        <Stack.Screen name="UserUpdate" component={UserUpdate}/>
        <Stack.Screen name="Follow" component={Follow}/>
        <Stack.Screen name="LookMe" component={LookMe}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="MyDynamic" component={MyDynamic}/>
        <Stack.Screen name="FriendsDetails" component={FriendsDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
