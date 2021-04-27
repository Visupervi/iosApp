import React from 'react';
import { View, TextInput } from 'react-native';
import IconFont from '../../../../../components/IconComponent/IconFont';
const SearchInput =  props => {
    return (
      <View style={{
        height: 40, borderRadius: 20, backgroundColor: "#fff",
        position: "relative",...props.style
      }}>
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder="搜索用户" style={{paddingLeft:30}}  />
        <IconFont style={{ position: "absolute", left: 10, top: 13,color:"#666" }} name="iconsousuo" />
      </View>
    )
}
export default SearchInput;
