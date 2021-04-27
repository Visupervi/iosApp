/**
 * @Author visupervi
 * @Description 验证码组件
 * @Date 3:32 下午 2021/4/19
 * @Param
 * @return
 */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFiledRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#000000',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#7d53ea',
    color: '#7d53ea',
  },
});

const CELL_COUNT = 6;
const CodeFieldInput = (props) => {
  const {value, onPress, onSubmit} = props;

  return (
    <CodeField
      value={value}
      onChangeText={onPress}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFiledRoot}
      keyboardType="name-phone-pad"
      onSubmitEditing={onSubmit}
      textContentType="oneTimeCode"
      returnKeyType="send"
      renderCell={({index, symbol, isFocused}) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}>
          {isFocused}
          {symbol || (isFocused ? <Cursor/> : null)}
        </Text>
      )}
    />
  );
};

export default CodeFieldInput;
