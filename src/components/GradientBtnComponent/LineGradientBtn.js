/**
 * @Author visupervi
 * @Description 渐变button组件
 * @Date 3:31 下午 2021/4/19
 * @Param
 * @return
 */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientBtn = props => {
  const {style, onPress, disable, color} = props;
  const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      color: style.color || '#ffffff',
      backgroundColor: 'transparent',
    },
  });
  return (
    <>
      <TouchableOpacity disabled={disable} onPress={onPress}
                        style={{width: '100%', height: '100%', ...style, overflow: 'hidden'}}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={props.color}
                        style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            {props.children}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};
export default LinearGradientBtn;
