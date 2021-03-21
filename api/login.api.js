import service from '@/utils/service'

export const login = {
	onLogin: {
		url: '/oauth2/login'
	},
	onLogout: () => {
		uni.clearStorage()
	},
}

service.parseApi('url_login', 'login', login)
