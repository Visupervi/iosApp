/**
 * @Author visupervi
 * @Description 请求地址
 * @Date 3:35 下午 2021/4/19
 * @Param
 * @return
 */
import {$fetch} from '../utils/fetchOrAjax';

// 登录注册请求
export const login = data => $fetch('/api/login', data, 'get');

// 验证码交验
export const checkCode = data => $fetch('/api/checkCode', data, 'post');

// 获取访问数据
export const getRecommends = data => $fetch('/api/friends/visit', data, 'get');

// 获取今日佳人数据
export const getPerfectGirl = data =>
  $fetch('/api/friends/todayBest', data, 'get');

// 获取推荐数据/api/friends/recommend
export const getRecommendsList = data =>
  $fetch('/api/friends/recommend', data, 'get');

// 获取卡片信息
export const getCards = data => $fetch('/api/friends/cards', data, 'get');

// 获取附近的人

export const getNearPerson = data => $fetch('/api/friends/near', data, 'get');

// 获取调查问卷
export const getSurvey = data => $fetch('/api/friends/survey', data, 'get');

// 获取试题
export const getQuestionList = data =>
  $fetch('/api/friends/questionList', data, 'get');

//获取朋友动态
export const getFriendsDynamic = data =>
  $fetch('/api/friends/detail', data, 'get');

//获取消息列表
export const getMessageList = data =>
  $fetch('/api/message/messageList', data, 'get');

// 获取用户信息
export const getUserInfo = data => $fetch('/api/user/userInfo', data, 'get');

// 获取互相关注数据
export const getFansList = data => $fetch('/api/user/fans', data, 'get');
