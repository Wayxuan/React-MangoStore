/**
 * 登录
 */
export function setCookie(name, value, n) {
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + n);
  document.cookie = name + "=" + value + ";expires=" + oDate;
}

export function getCookie(name) {
  var str = document.cookie;
  var arr = str.split("; ");
  for (var i = 0; i < arr.length; i++) {
    var arr1 = arr[i].split("=");
    console.log(arr1,"aaa",arr1[0],"bbb",arr1[1])
    if (arr1[0] === name) {
      return arr1[1];
    }
  }
}

export function removeCookie(name) {
  setCookie(name, 1, -1);
}


/**
 * 是否登录
 */
export const isLogined = () => {
  if (getCookie("userToken")) {
    return true;
  } else {
    return false;
  }
};

/**
 * 退出登录
 */
export const logOut = () => removeCookie("userToken");

