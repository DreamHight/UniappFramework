export const getError = (code) => {
  const errorJson = {
    404: '接口地址错误或不存在',
  }
  return errorJson[code]()
}
