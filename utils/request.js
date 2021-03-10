// const getConfigs1 = (baseURL, contentType, responseType) => {
//   const token = getLocalStorage("token") || "Basic Y2xpZW50XzI6c2VjcmV0";
//   defaultConfig.headers.Authorization = token;
//   defaultConfig.baseURL = config.baseUrls[process.env.NODE_ENV][baseURL];
//   defaultConfig.headers["Content-Type"] = contentType
//     ? contentTypeJson["application_form"]
//     : contentTypeJson["application_json"];
//   defaultConfig.responseType = responseType;
// }

// // http请求
// const request1 = options => {
//   options = options || {};
//   const newOptions = Object.assign(defaultConfig, options);
//   return instance(newOptions);
// };

// // post请求
// export const post1 = (baseURL, url, data = {}, responseType = "json") => {
//   const params = {
//     method: "post",
//     url: url,
//     data: data["req_type"] ? formatParam(data) : data
//   };
//   getConfigs(baseURL, data["req_type"], responseType);
//   return request(params);
// }

import domains from '../configs/domian.js'

const getConfigs = (baseURL, options) => {
  // const token = getLocalStorage("token") || "Basic Y2xpZW50XzI6c2VjcmV0";
  // options.headers.Authorization = token;
  // options.headers.Authorization = token;
  
  // defaultConfig.baseURL = config.baseUrls[process.env.NODE_ENV][baseURL];
  // defaultConfig.headers["Content-Type"] = contentType
  //   ? contentTypeJson["application_form"]
  //   : contentTypeJson["application_json"];
  // defaultConfig.responseType = responseType;
  
  const params = JSON.parse(JSON.stringify(options))
	if(!params.url){
		return '噢！！！缺少请求地址~~~'
	}
	params.url = domains['development'][baseURL] + options.url
	params.data = options.data || {}
	// params.method = options.method || 'GET'
	// params.timeout = options.timeout || 60000
	// params.dataType = options.dataType || 'json'
	// params.responseType = options.responseType || 'text'
	return params
  
  // {
  // 	url: url,
  // 	data: data,
  // 	header: header,
  // 	method: 'GET',
  // 	timeout: 60000,
  // 	dataType: 'json',
  // 	responseType: 'text',
  // 	data: data,
  // 	success: (res) => {},
  // 	fail: (res) => {},
  // 	complete: (res) => {},
  // }
}

export const request = (baseURL, url, options) => {
	const params = getConfigs(baseURL, options)
	if(typeof params === 'string'){
		return params
	}
	// Promise
	return uni.request(params)
}

export const async requestSync = (baseURL, url, options) => {
	const params = getConfigs(baseURL, options)
	if(typeof params === 'string'){
		return params
	}
	// Await
	return await uni.request(params)
}
