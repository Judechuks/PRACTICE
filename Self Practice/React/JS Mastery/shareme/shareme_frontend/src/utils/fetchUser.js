export const fetchUser = () => {
  // saved userInfo
  const userInfo =
    localStorage.getItem("@shareme_user") !== "undefined"
      ? JSON.parse(localStorage.getItem("@shareme_user"))
      : localStorage.clear();
  return userInfo;
};
