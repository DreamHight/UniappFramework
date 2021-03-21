import { request } from '../utils/request'

const domain = 'url_login'

export const login = {
	onLogin: (options) => {
		// 请求接口
		const params = {
			url: '/oauth2/login',
			data: options
		}

		// request(domain, params)
		// const res = request(domain, params)
		// request(domain, params).then(data => {
		// 	console.log('onLoginonLogin', data)
		// 	const [res] = data
		// 	if(res) {
		// 		if (res.data.code === 1) {
		// 			try {
		// 				uni.setStorageSync('loginInfo', res.data.data);
		// 			} catch (e) {
		// 				console.log('setStorageSync-loginInfo: ', e);
		// 			}
		// 		}
		// 	}
		// })
	},
	onLogout: () => {
		console.log('onLogout')
	}
}
