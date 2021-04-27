import { Dimensions } from "react-native";
// 设计搞的宽度 / 元素宽度 = 手机宽度 / 手机中元素宽度
// 手机元素宽度 = 手机宽度 * 元素宽度 / 设计稿宽度

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
export const pxToDp = (elePx) => screenWidth * elePx / 750;
