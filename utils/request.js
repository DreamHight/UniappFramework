import { domains } from '@/configs/domain'
import { getToken } from '@/common/index'
import {
	requestBasic,
	requestTimeout,
	requestMethod,
	environment,
	requestParams,
	requestToken
} from '../configs/setting'
// class Request {
	// constructor() {
	const contentTypeJson = {
		'json': 'application/json;charset=utf-8',
		'form': 'application/x-www-form-urlencoded;charset=UTF-8'
	}
	// }


// 处理请求的参数
const getConfigs = (baseURL, options) => {
  const params = JSON.parse(JSON.stringify(options))
	if(!params.url){
		throw '噢！！！请求参数中缺少请求地址~~~'
	}

	const authorization = requestToken && (getToken() || requestBasic)
	const contentType = params.data.req_type ? contentTypeJson[params.data.req_type] : contentTypeJson.json
	const headers = {
		'Content-Type': contentType
	}
	if (requestToken) {
		headers['Authorization'] = authorization
	}
	// 判断是否有自定义的header，和 'Content-Type'
	if (params.header) {
		for (const key in params.header) {
			headers[key] = params.header[key]
			if ('Content-Type') {
				headers[key] = contentTypeJson[params.header[key]]
			}
		}
	}
	// 需要统一请求的参数
	const paramsData = params.data || {}
	if (requestParams && JSON.stringify(requestParams) !== "{}") {
		for (const key in requestParams) {
			paramsData[key] = requestParams[key]
		}
	}
	params.url = domains[environment][baseURL] + params.url
	params.data = paramsData
	params.header = headers
	params.method = params.method || requestMethod
	params.timeout = params.timeout || requestTimeout
	return params
}

// 请求缓存的处理
const setCache = (options) => {
	let cache = false
	if (options.data['cache']) {
		console.log('cache-options')
		cache = true
	}
	return cache
}

// 发送请求前的处理
const beforeSend = (baseURL, options) => {
	if(options.data['loading']){
		uni.showLoading({
			title: '加载中'
		})
	}

	const newOptions = {}
	const keywords = ['target', 'variable', 'success', 'fail', 'cache', 'loading']
	const requestwords = [
		'header', 'method', 'timeout', 'dataType',
		'responseType', 'sslVerify', 'withCredentials',
		'firstIpv4', 'success', 'fail', 'complete'
	]
	// 拆分提取参数
	for (const key in options) {
		if(!keywords.includes(key)){
			newOptions[key] = options[key]
		}
		if(key === 'data') {
			newOptions[key] = options[key].params
			for (const k in options[key]) {
				if(requestwords.includes(k)){
					newOptions[k] = options[key][k]
				}
			}
		}
	}

	const params = getConfigs(baseURL, newOptions)
	return params
}

// 发送请求的处理
const send = (options, params) => {
	const requestTask = uni.request(params)
	requestTask.then(data => {
		const [error, res] = data
		if (error) {
			uni.showToast({
				title: error.errMsg,
				duration: 3000,
				icon: 'none'
			})
		}
		if(res) {
			callback(options, res)
		}
	})
	return requestTask

	// Promise
	// return new Promise((resolve, reject) => {
	// 	params['success'] = (res) => {
	// 		console.log('==success==', res)
	// 		resolve(res)
	// 		callback(options, res)
	// 	}
	// 	params['fail'] = (error) => {
	// 		console.log('==fail==', error)
	// 		uni.showToast({
	// 			title: error.errMsg,
	// 			duration: 3000,
	// 			icon: 'none'
	// 		})
	// 		callback(options, error)
	// 	}
	// 	params['complete'] = (complete) => {
	// 		console.log('==complete==', complete)
	// 		if(options.data['loading']){
	// 			uni.hideLoading()
	// 		}
	// 	}
	// 	uni.request(params)
	// })
}

// 请求成功后的处理
const callback = (options, res) => {
	if(options.data['loading']){
		uni.hideLoading()
	}

	if (res.data.code === 1) {
		if(options.data.success) {
			options.data.success(res.data)
		} else {
			if(options.data.target && options.data.variable){
				options.data.target[options.data.variable] = res.data.data
			}
		}
	} else {
		uni.showToast({
			title: res.data.msg,
			duration: 2000,
			icon: 'none'
		})
		if(options.data.fail) {
			options.data.fail(res.data)
		}
	}
}

// 异步请求
export const request = (baseURL, options) => {
	// 请求缓存的处理
	setCache(options)

	// 发送请求前的处理
	const params = beforeSend(baseURL, options)

	// 发送请求的处理
	return send(options, params)
}
