/**
 * @Author Visupervi
 * @Date 2019/12/16 10:55
 * @Name fetch与ajax 封装
 * @Param
 * @Return
 * @Description 对fetch封装，包含get,post ajax的post请求
 */
import FetchMock from 'react-native-fetch-mock';
const fetch = new FetchMock(require("../../__ mocks__")).fetch || window.fetch;
// const fetch = window.fetch;
// console.log("fetch", fetch);
export const $fetch = async (url = "", data = {}, type = "GET", method = "fetch") => {

  if (type.toLocaleLowerCase() === "get") {
    let str = "";
    Object.keys(data).forEach((item, index) => {
      str += item + '=' + data[item] + '&';
    });
    if (str !== "") {
      str = str.substr(0, str.lastIndexOf("&"));
      url = url + "?" + decodeURI(str);
    }
  }

  if (fetch && method === "fetch") {
    let requestConfig = {
      credentials: 'include',
      method: type,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      // mode: "no-cors",
      // cache: "force-cache"
    };
    if (type.toLocaleLowerCase() === "post") {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
        // value: qs.stringify(data,{})
      });
    }

    try {
      const response = await fetch(url, requestConfig);
      return await response.json();
    } catch (e) {
      // console.log("e",e)
      // throw new Error(e)
    }
  } else {
    return new Promise(((resolve, reject) => {
      let reqObj = !window.XMLHttpRequest ? new window.ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
      let sendData = "";
      if (type.toLowerCase() === "post") {
        sendData = JSON.stringify(data);
      }
      reqObj.open(type, url, true);
      reqObj.setRequestHeader("Content-type", "application/json");
      reqObj.send(sendData);

      reqObj.onreadystatechange = () => {
        if (reqObj.readyState === 4) {
          if (reqObj.status === 200) {
            resolve(JSON.parse(reqObj.response));
          }
        } else {
          reject(reqObj.response);
        }
      };
    }));
  }

};
