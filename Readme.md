#### 1. 运行的时候会报错找不到/src/Easing
在新版的react-native/Library/Animate下没有src,所以要修改teaset下面的components/ListRow/TouchableOpcity.js下面的路径
为 import Easing from 'react-native/Libraries/Animated/Easing';
#### 2. native-tab报错
```js
xxx:{
...ViewPropTypes,
    sceneStyle: ViewPropTypes.style,
    tabBarStyle: ViewPropTypes.style,
    tabBarShadowStyle: TabBar.propTypes.shadowStyle,
    hidesTabTouch: PropTypes.bool
} 

```

#### 3.关闭警告
```js
LogBox.ignoreAllLogs(true)//关闭全部黄色警告
LogBox.ignoreLogs([
  'Warning: BackAndroid is deprecated. Please use BackHandler instead.'
])
```
