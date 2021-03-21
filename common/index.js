export const getToken = () => {
  let token
  const temp = uni.getStorageSync('loginInfo')
  if(temp) {
    token = 'Bearer ' + temp.access_token
  }
  return token
}
