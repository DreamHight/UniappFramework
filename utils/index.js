// 格式化日期时间
const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}
export const formatTimes = (date, type='datetime', sign='/') => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()
	const typeJson = {
		'datetime': () => ([year, month, day].map(formatNumber).join(sign) + ' ' + [hour, minute, second].map(formatNumber).join(':')),
		'date': () => [year, month, day].map(formatNumber).join(sign),
		'year': () => year,
		'month': () => month,
		'day': () => day,
		'ym': () => [year, month].map(formatNumber).join(sign),
		'md': () => [month, day].map(formatNumber).join(sign),
		'time': () => [hour, minute, second].map(formatNumber).join(':'),
		'hour': () => hour,
		'minute': () => minute,
		'hm': () => [hour, minute].map(formatNumber).join(':')
	}
	return typeJson[type]()
}
