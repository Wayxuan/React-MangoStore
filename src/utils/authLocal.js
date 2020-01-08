/**
 * 登录
 * @param {*} user
 */
export const login = user =>
  localStorage.setItem("token", user);

// export function login2(user) {
//   localStorage.setItem("token", JSON.stringify(user));
// }

/**
 * 是否登录
 */
export const isLogined = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};

/**
 * 退出登录
 */
export const logOut = () => localStorage.removeItem("token");
