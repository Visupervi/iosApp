#### 1. 运行的时候会报错找不到/src/Easing
在新版的react-native/Library/Animate下没有src,所以要修改teaset下面的components/ListRow/TouchableOpcity.js下面的路径
为 import Easing from 'react-native/Libraries/Animated/Easing';
#### 2. native-tab报错

    ...ViewPropTypes,
    sceneStyle: ViewPropTypes.style,
    tabBarStyle: ViewPropTypes.style,
    tabBarShadowStyle: TabBar.propTypes.shadowStyle,
    hidesTabTouch: PropTypes.bool
    

#### 3.关闭警告
```js
LogBox.ignoreAllLogs(true)//关闭全部黄色警告
LogBox.ignoreLogs([
  'Warning: BackAndroid is deprecated. Please use BackHandler instead.'
])
```

#### 4.更新Xcode以后编译报'atomic_notify_one<unsigned long>' is unavailable
This error was an error from flipper
所以把podfile的代码注释掉
```
# Enables Flipper.
  #
  # Note that if you have use_frameworks! enabled, Flipper will not work and
  # you should disable the next line.
  # use_flipper!()

```
