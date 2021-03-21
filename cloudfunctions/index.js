// 批量注册接口
const R = require.context("./", true, /\.api\.js/)
const services = {}
R.keys().forEach(key => {
	const _keyArr = key.split(".")
	const _key = _keyArr[1].substr(1)
	services[_key] = R(key)[_key]
})

export default services
