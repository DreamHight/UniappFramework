import { request } from '@/utils/request'

const domain = 'url_department'//'url_base' //'url_department'//

export const department = {
	getDepartment: (options) => {
		console.log(options)

		const params = {
			url: '/sys/operatordepartment/getDepartmentByOperator',
			// url: 'demo/index.php',
			data: options,
			// timeout: 1000
		}
		// request(domain, params)
		// const requestTask = request(domain, params)
		request(domain, params).then(data => {
			const [error, res] = data
			if (!error && res && res.data.code === 1) {
				console.log('api-request-then: ', res)
			}
		})
	},
}
