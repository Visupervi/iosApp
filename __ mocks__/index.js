export default {
  '/api/users': ({params}) => {
    const all = [
      {
        name: 'John',
        age: 15,
      },
      {
        name: 'Lily',
        age: 16,
      },
    ];
    let filtered;
    if ('undefined' !== typeof params) {
      filtered = all.filter(item => {
        let result = true;
        const keys = Object.keys(params);
        keys.forEach(key => {
          const param = params[key];

          if (item[key] && item[key] !== param) {
            result = false;
          }
        });

        return result;
      });
    } else {
      filtered = all;
    }
    return {
      status: 200,
      data: filtered,
    };
  },
  '/api/login': ({params}) => {
    return {
      status: 200,
      data: {
        status: 200,
        msg: 'success',
        code: '888888',
      },

    };
  },
  '/api/users/mockjs': ({params}) => {
    const all = Mock.mock({
      'list|2': [{
        'id|+1': 1,
        'name': '@first @last',
        'age|18-54': 1,
      }],
    }).list;
    let filtered;
    if ('undefined' !== typeof params) {
      filtered = all.filter(item => {
        let result = true;
        const keys = Object.keys(params);
        keys.forEach(key => {
          const param = params[key];

          if (item[key] && item[key] !== param) {
            result = false;
          }
        });

        return result;
      });
    } else {
      filtered = all;
    }
    return {
      status: 200,
      data: filtered,
    };
  },
  '/api/users/{userId}': ({urlparams}) => {
    return {
      status: 200,
      data: {
        userId: urlparams.userId,
      },
    };
  },
  '/api/users/pru/{userId}': ({urlparams}) => {
    return {
      userId: urlparams.userId,
    };
  },
  'POST /api/users': () => {
    return {
      status: 201,
    };
  },
  'POST /api/checkCode': () => {
    return {
      status: 201,
      data: {
        isNew: true,
        status: 200,
        msg: 'success',
      },
    };
  },
  'PUT /api/users/{userId}': ({urlparams}) => {
    return {
      status: 204,
      data: {
        userId: urlparams.userId,
      },
    };
  },
  '/api/friends/visit': ({params}) => {
    // console.log('params', params);
    return {
      status: 200,
      data: {
        status: 200,
        msg: 'success',
        list: [
          {
            id: 7,
            header: 'https://pic.netbian.com/uploads/allimg/180531/213648-152777380869aa.jpg',
            nick_name: '狗子',
            gender: '女',
            age: 3,
            marry: '单身',
            degree: '金毛',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 8,
            header: 'https://pic.netbian.com/uploads/allimg/180531/211429-1527772469e7c6.jpg',
            nick_name: '狗子',
            gender: '女',
            age: 3,
            marry: '单身',
            degree: '金毛',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 9,
            header: 'https://pic.netbian.com/uploads/allimg/180430/122659-15250624191516.jpg',
            nick_name: '狗',
            gender: '女',
            age: 3,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 10,
            header: 'https://pic.netbian.com/uploads/allimg/180430/120604-15250611640e94.jpg',
            nick_name: '白猫',
            gender: '女',
            age: 2,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          }
        ]
      }
    };
  },
  "/api/friends/todayBest" : ({params}) => {
    return {
      status: 200,
      data: {
        status: 200,
        msg:"success",
        list:[
          {
            id: 20,
            header: 'https://pic.netbian.com/uploads/allimg/160814/102935-147114177564db.jpg',
            nick_name: '狸花猫',
            gender: '女',
            age: 3,
            marry: '单身',
            degree: '猫科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          }
        ]
      }
    }
  },
  "/api/friends/recommend": ({params}) => {
    return{
      status: 200,
      data: {
        status: 200,
        msg:"success",
        list:[
          {
            id: 101,
            header: 'https://pic.netbian.com/uploads/allimg/170629/220250-1498744970a1fb.jpg',
            nick_name: '若只如初现',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 102,
            header: "https://pic.netbian.com/uploads/allimg/170629/220250-1498744970a1fb.jpg",
            nick_name: '春花秋月',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 103,
            header: "https://pic.netbian.com/uploads/allimg/171112/154229-15104725490b76.jpg",
            nick_name: '华灯初上',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 104,
            header: "https://pic.netbian.com/uploads/allimg/171226/192826-1514287706bba5.jpg",
            nick_name: '一叶知秋',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 105,
            header: 'https://pic.netbian.com/uploads/allimg/171011/191113-15077202736377.jpg',
            nick_name: '叼刀之人',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 106,
            header: "https://pic.netbian.com/uploads/allimg/171020/204258-1508503378e872.jpg",
            nick_name: '身无彩凤',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 107,
            header: "https://pic.netbian.com/uploads/allimg/171006/233153-1507303913b232.jpg",
            nick_name: '落花流水',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 108,
            header: "https://pic.netbian.com/uploads/allimg/170629/215816-14987446964c89.jpg",
            nick_name: '灰家往事',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 109,
            header: 'https://pic.netbian.com/uploads/allimg/171020/204258-1508503378e872.jpg',
            nick_name: '灿烂如阳',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 200,
            header: "https://pic.netbian.com/uploads/allimg/170922/234416-15060950561d0c.jpg",
            nick_name: '往事只能追忆',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 201,
            header: "https://pic.netbian.com/uploads/allimg/171027/220219-150911293998d1.jpg",
            nick_name: '星际穿越',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 202,
            header: "https://pic.netbian.com/uploads/allimg/170922/234434-1506095074f96d.jpg",
            nick_name: '冷山',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          }
        ]
      }
    }
  },
  "/api/friends/cards" : ({params}) => {
    return {
      status: 200,
      data: {
        code: "1000",
        msg: "success",
        list: [
          {
            id: 1340,
            header: 'https://pic.netbian.com/uploads/allimg/170629/215816-14987446964c89.jpg',
            nick_name: '成果',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 1055,
            header: 'https://pic.netbian.com/uploads/allimg/170922/234434-1506095074f96d.jpg',
            nick_name: '旅拍',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 1034,
            header: 'https://pic.netbian.com/uploads/allimg/171006/233153-1507303913b232.jpg',
            nick_name: '猫咪',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 1020,
            header: 'https://pic.netbian.com/uploads/allimg/171226/192826-1514287706bba5.jpg',
            nick_name: '黑猫',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 1003,
            header: 'https://pic.netbian.com/uploads/allimg/171112/154229-15104725490b76.jpg',
            nick_name: '若只如初现',
            gender: '女',
            age: 20,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 1001,
            header: 'https://pic.netbian.com/uploads/allimg/180531/211429-1527772469e7c6.jpg',
            nick_name: '夕阳红夕颜',
            gender: '女',
            age: 24,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          }
        ]
      }
    }
  },
  "/api/friends/near" : ({params}) => {
    return {
      status: 200,
      data: {
        code: "1000",
        msg: "success",
        list: [
          {
            id: 1340,
            header: 'https://pic.netbian.com/uploads/allimg/200229/210718-15829816381f25.jpg',
            nick_name: '成果',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 40,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 1055,
            header: 'https://pic.netbian.com/uploads/allimg/191213/233942-15762515824cc8.jpg',
            nick_name: '旅拍',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 30,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 1034,
            header: 'https://pic.netbian.com/uploads/allimg/191015/102323-1571106203c36d.jpg',
            nick_name: '旗袍',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 555,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 1020,
            header: 'https://pic.netbian.com/uploads/allimg/190925/202046-15694140468f9d.jpg',
            nick_name: '黑直长',
            gender: '女',
            age: 23,
            marry: '单身',
            degree: '本科',
            dist: 340,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 1003,
            header: 'https://pic.netbian.com/uploads/allimg/190727/191307-156422598706bc.jpg',
            nick_name: '若只如初现',
            gender: '女',
            age: 20,
            marry: '单身',
            degree: '本科',
            dist: 200,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: 1001,
            header: 'https://pic.netbian.com/uploads/allimg/190628/225416-15617336564f99.jpg',
            nick_name: '夕阳红夕颜',
            gender: '女',
            age: 24,
            marry: '单身',
            degree: '本科',
            dist: 10,
            agediff: 0,
            fateValue: 40,
          }
        ]
      }
    }
  },
  "/api/friends/survey" : (params) => {
    return {
      status : 200,
      data: {
        code:"1000",
        msg:"success",
        list:[
          {
            id: 1111,
            title: "1.png",
            header: "../../assets/images/1.png"
          },
          {
            id: 1222,
            title: "2.png",
            header: "../../assets/images/2.png"

          },
          {
            id: 1223,
            title: "3.png",
            header: "../../assets/images/3.png"
          }
        ]
      }
    }
  },
  "/api/friends/questionList" : (params) => {
    return {
      status: 200,
      data:{
        code:"1000",
        msg:"success",
        list:[
          {
            'qsid': 1,
            'question_title': '未来生活的幸福指数，跟物质和精神哪个关系更 大？',
            'answers': [
              {
                'qsid': 1,
                'ans_title': '跟物质关系更大',
                'ans_No': 'A',
              },
              {
                'qsid': 1,
                'ans_title': '跟精神关系更大',
                'ans_No': 'B',
              },
            ],
          },
          {
            'qsid': 2,
            'question_title': '未来生活的幸福指数，跟物质和精神哪个关系更小？',
            'answers': [
              {
                'qsid': 1,
                'ans_title': '跟物质关系更小',
                'ans_No': 'A',
              },
              {
                'qsid': 1,
                'ans_title': '跟精神关系更小',
                'ans_No': 'B',
              },
            ],
          },
          {
            'qsid': 3,
            'question_title': '未来生活的幸福指数，跟物质和精神哪个没有关系？',
            'answers': [
              {
                'qsid': 1,
                'ans_title': '跟物质没有关系',
                'ans_No': 'A',
              },
              {
                'qsid': 1,
                'ans_title': '跟精神没有关系',
                'ans_No': 'B',
              },
            ],
          }
        ]
      }
    }
  },
  "/api/friends/detail" : ({params}) => {
    return {
      status: 200,
      data: {
        code: "1000",
        msg: "success",
        result: {
          userInfo: {
            id: 1003,
            header: 'https://pic.netbian.com/uploads/allimg/180531/213648-152777380869aa.jpg',
            nick_name: '若只如初现',
            gender: '女',
            age: 20,
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
            photos:[
              {
                photo: "https://pic.netbian.com/uploads/allimg/210419/163530-16188213300795.jpg"
              },
              {
                photo: "https://pic.netbian.com/uploads/allimg/210419/163714-1618821434c80e.jpg"
              },
              {
                photo: "https://pic.netbian.com/uploads/allimg/210419/164036-16188216361725.jpg"
              },
              {
                photo: "https://pic.netbian.com/uploads/allimg/191220/231329-15768548099602.jpg"
              }

            ],
            dynamic: [
              {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                dist: 6,
                album:[
                  {
                    am: "https://pic.netbian.com/uploads/allimg/180531/211429-1527772469e7c6.jpg"
                  },
                  {
                    am: "https://pic.netbian.com/uploads/allimg/180531/213648-152777380869aa.jpg"
                  },
                  {
                    am: "https://pic.netbian.com/uploads/allimg/180430/120604-15250611640e94.jpg"
                  }
                ],
                create_time: 5,
                star_count:10,
                comment_count:20,
                like_count: 100,
                text:"每一个繁花似锦，都是经历了暗涛汹涌；每一个鲜艳夺目，都是经历了风雨无阻；每一个风光无限，都是经历了黯然伤神。所有的一切，只有经历过的人，才更懂得背后的力量。"
              },
              {
                id:"3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                album:[
                  {
                    am: "https://pic.netbian.com/uploads/allimg/210419/163530-16188213300795.jpg"
                  },
                  {
                    am: "https://pic.netbian.com/uploads/allimg/180531/213648-152777380869aa.jpg"
                  },
                  {
                    am: "https://pic.netbian.com/uploads/allimg/191220/231329-15768548099602.jpg"
                  }
                ],
                dist:6,
                create_time:4,
                star_count:10,
                comment_count:20,
                like_count: 100,
                text: "昨天再好，走不回去，明天再难，也要抬脚继续，你不勇敢，没有人替你坚强，你不疯狂，没有人帮你实现梦想。"
              },
              {
                id:"58694a0f-3da1-471f-bd96-145571e29d72",
                album:[
                  {
                    am: "https://pic.netbian.com/uploads/allimg/180531/211429-1527772469e7c6.jpg"
                  },
                  {
                    am: "https://pic.netbian.com/uploads/allimg/180531/213648-152777380869aa.jpg"
                  },
                  {
                    am: "https://pic.netbian.com/uploads/allimg/180430/120604-15250611640e94.jpg"
                  }
                ],
                dist:6,
                star_count:10,
                comment_count:20,
                like_count: 100,
                create_time:3,
                text: "别总是抱怨生活不够幸运，是你欠了生活一份努力，每一个你讨厌的现在，都有一个不够努力的曾经，未来美不美，取决于你现在拼不拼。"
              },
              {
                id:"bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
                album:[
                  {
                    am: "https://pic.netbian.com/uploads/allimg/210419/163530-16188213300795.jpg"
                  },
                  {
                    am: "https://pic.netbian.com/uploads/allimg/210419/164036-16188216361725.jpg"
                  },
                  {
                    am: "https://pic.netbian.com/uploads/allimg/191220/231329-15768548099602.jpg"
                  }
                ],
                dist:0,
                star_count:10,
                comment_count:20,
                like_count: 100,
                create_time:6,
                text:"每一个繁花似锦，都是经历了暗涛汹涌；每一个鲜艳夺目，都是经历了风雨无阻；每一个风光无限，都是经历了黯然伤神。所有的一切，只有经历过的人，才更懂得背后的力量。"
              },
              {
                id:"bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
                album:[
                  {
                    am: "https://pic.netbian.com/uploads/allimg/180531/211429-1527772469e7c6.jpg"
                  },
                  {
                    am: "https://pic.netbian.com/uploads/allimg/180531/213648-152777380869aa.jpg"
                  },
                  {
                    am: "https://pic.netbian.com/uploads/allimg/180430/120604-15250611640e94.jpg"
                  }
                ],
                dist:4,
                star_count:10,
                comment_count:20,
                like_count: 100,
                create_time:6,
                text:"每一个繁花似锦，都是经历了暗涛汹涌；每一个鲜艳夺目，都是经历了风雨无阻；每一个风光无限，都是经历了黯然伤神。所有的一切，只有经历过的人，才更懂得背后的力量。"
              },
              {
                id:"bd7acbea-c1b1-46c2-aed5-3ad53abb28bf",
                album:[
                  {
                    am: "https://pic.netbian.com/uploads/allimg/210419/163530-16188213300795.jpg"
                  },
                  {
                    am: "https://pic.netbian.com/uploads/allimg/210419/164036-16188216361725.jpg"
                  },
                  {
                    am: "https://pic.netbian.com/uploads/allimg/191220/231329-15768548099602.jpg"
                  }
                ],
                star_count:10,
                comment_count:20,
                like_count: 100,
                create_time:6,
                dist:5,
                text:"每一个繁花似锦，都是经历了暗涛汹涌；每一个鲜艳夺目，都是经历了风雨无阻；每一个风光无限，都是经历了黯然伤神。所有的一切，只有经历过的人，才更懂得背后的力量。"
              }
            ]
          }
        }
      }
    }
  },
  "/api/message/messageList" : ({params}) => {
    return {
      status:200,
      data:{
        code:"1000",
        msg:"success",
        list:[
          {
            id:"bd7acbea-c1b1-46c2-aed5-3ad53abb2866",
            username:"张三",
            header:"https://pic.netbian.com/uploads/allimg/170904/192244-15045241647a67.jpg",
            sign:"知错能改善莫大焉",
            message:[
              {
                content:"1",
                createTime: "2021-04-26"
              },
              {
                content:"2",
                createTime: "2021-04-26"
              },
              {
                content:"3",
                createTime: "2021-04-26"
              },
              {
                content:"5",
                createTime: "2021-04-26"
              }
            ]
          },
          {
            id:"bd7acbea-c1b1-46c2-aed5-3ad53abb28cc",
            username:"李四",
            header:"https://pic.netbian.com/uploads/allimg/170904/192002-15045240025bd5.jpg",
            sign:"知错能改善莫大焉",
            message:[
              {
                content:"1",
                createTime: "2021-04-26"
              },
              {
                content:"2",
                createTime: "2021-04-26"
              },
              {
                content:"3",
                createTime: "2021-04-26"
              },
              {
                content:"5",
                createTime: "2021-04-26"
              }
            ]
          },
          {
            id:"bd7acbea-c1b1-46c2-aed5-3ad53abb28ff",
            username:"王五",
            header:"https://pic.netbian.com/uploads/allimg/170818/194109-1503056469336d.jpg",
            sign:"知错能改善莫大焉",
            message:[
              {
                content:"1",
                createTime: "2021-04-26"
              },
              {
                content:"2",
                createTime: "2021-04-26"
              },
              {
                content:"3",
                createTime: "2021-04-26"
              },
              {
                content:"5",
                createTime: "2021-04-26"
              }
            ]
          },
          {
            id:"bd7acbea-c1b1-46c2-aed5-3ad53abb28gg",
            username:"赵六",
            header:"https://pic.netbian.com/uploads/allimg/170716/201417-1500207257fd11.jpg",
            sign:"知错能改善莫大焉",
            message:[
              {
                content:"1",
                createTime: "2021-04-26"
              },
              {
                content:"2",
                createTime: "2021-04-26"
              },
              {
                content:"3",
                createTime: "2021-04-26"
              },
              {
                content:"5",
                createTime: "2021-04-26"
              }
            ]
          },
          {
            id:"bd7acbea-c1b1-46c2-aed5-3ad53abb28ll",
            username:"钱七",
            header:"https://pic.netbian.com/uploads/allimg/170706/185603-14993385632872.jpg",
            sign:"知错能改善莫大焉",
            message:[
              {
                content:"1",
                createTime: "2021-04-26"
              },
              {
                content:"2",
                createTime: "2021-04-26"
              },
              {
                content:"3",
                createTime: "2021-04-26"
              },
              {
                content:"5",
                createTime: "2021-04-26"
              }
            ]
          }
        ]
      }
    }
  },
  "/api/user/userInfo" : ({params}) => {
    return {
      status: 200,
      data:{
        code:"1000",
        msg:"success",
        result: {
          id: 9003,
          header: 'https://pic.netbian.com/uploads/allimg/170705/161456-14992424969c22.jpg',
          nick_name: '若只如初现',
          gender: '女',
          age: 2,
          city:"上海",
          marry: '单身',
          fans:100,
          focus: 300,
          followEachOther: 100,
          degree: '猫科',
          dist: 0,
          agediff: 0,
          fateValue: 40,
        }
      }
    }
  },
  "/api/user/fans": ({params}) => {
    return{
      status:200,
      data:{
        code:"1000",
        msg:"success",
        list:[
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2001",
            header: 'https://pic.netbian.com/uploads/allimg/180531/211429-1527772469e7c6.jpg',
            nick_name: '夕阳红',
            gender: '女',
            age: 24,
            marry: '单身',
            degree: '本科',
            dist: 0,
            city:"上海",
            agediff: 0,
            fateValue: 40
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2002",
            header: 'https://pic.netbian.com/uploads/allimg/180531/211429-1527772469e7c6.jpg',
            nick_name: '夕颜',
            gender: '女',
            age: 24,
            marry: '单身',
            city:"上海",
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2003",
            header: 'https://pic.netbian.com/uploads/allimg/170417/114448-14924006882c5d.jpg',
            nick_name: '夕夕',
            gender: '女',
            age: 24,
            city:"上海",
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2004",
            header: 'https://pic.netbian.com/uploads/allimg/170629/213452-14987432927f26.jpg',
            nick_name: '阳红',
            gender: '女',
            age: 24,
            city:"上海",
            marry: '单身',
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2005",
            header: 'https://pic.netbian.com/uploads/allimg/170630/141432-1498803272b5eb.jpg',
            nick_name: '红夕颜',
            gender: '女',
            age: 24,
            marry: '单身',
            city:"上海",
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2006",
            header: 'https://pic.netbian.com/uploads/allimg/160711/161500-14682249008f6d.jpg',
            nick_name: '阳颜',
            gender: '女',
            age: 24,
            marry: '单身',
            degree: '本科',
            city:"上海",
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2005",
            header: 'https://pic.netbian.com/uploads/allimg/170630/141432-1498803272b5eb.jpg',
            nick_name: '红夕颜',
            gender: '女',
            age: 24,
            marry: '单身',
            city:"上海",
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2006",
            header: 'https://pic.netbian.com/uploads/allimg/160711/161500-14682249008f6d.jpg',
            nick_name: '阳颜',
            gender: '女',
            age: 24,
            marry: '单身',
            degree: '本科',
            city:"上海",
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2005",
            header: 'https://pic.netbian.com/uploads/allimg/170630/141432-1498803272b5eb.jpg',
            nick_name: '红夕颜',
            gender: '女',
            age: 24,
            marry: '单身',
            city:"上海",
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2006",
            header: 'https://pic.netbian.com/uploads/allimg/160711/161500-14682249008f6d.jpg',
            nick_name: '阳颜',
            gender: '女',
            age: 24,
            marry: '单身',
            degree: '本科',
            city:"上海",
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2005",
            header: 'https://pic.netbian.com/uploads/allimg/170630/141432-1498803272b5eb.jpg',
            nick_name: '红夕颜',
            gender: '女',
            age: 24,
            marry: '单身',
            city:"上海",
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2006",
            header: 'https://pic.netbian.com/uploads/allimg/160711/161500-14682249008f6d.jpg',
            nick_name: '阳颜',
            gender: '女',
            age: 24,
            marry: '单身',
            degree: '本科',
            city:"上海",
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2005",
            header: 'https://pic.netbian.com/uploads/allimg/170630/141432-1498803272b5eb.jpg',
            nick_name: '红夕颜',
            gender: '女',
            age: 24,
            marry: '单身',
            city:"上海",
            degree: '本科',
            dist: 0,
            agediff: 0,
            fateValue: 40,
          },
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2006",
            header: 'https://pic.netbian.com/uploads/allimg/160711/161500-14682249008f6d.jpg',
            nick_name: '阳颜',
            gender: '女',
            age: 24,
            marry: '单身',
            degree: '本科',
            city:"上海",
            dist: 0,
            agediff: 0,
            fateValue: 40,
          }
        ]
      }
    }
  }

};


//https://pic.netbian.com/uploads/allimg/190628/225416-15617336564f99.jpg
// https://pic.netbian.com/uploads/allimg/190628/230521-1561734321643c.jpg
//https://pic.netbian.com/uploads/allimg/190422/193431-15559328710f46.jpg


//https://pic.netbian.com/uploads/allimg/210419/163530-16188213300795.jpg

//https://pic.netbian.com/uploads/allimg/210419/163714-1618821434c80e.jpg

//https://pic.netbian.com/uploads/allimg/210419/164036-16188216361725.jpg

//https://pic.netbian.com/uploads/allimg/191220/231329-15768548099602.jpg
