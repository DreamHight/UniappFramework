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

	if(type === 'datetime'){
		return [year, month, day].map(formatNumber).join(sign) + ' ' + [hour, minute, second].map(formatNumber).join(':')
	}else if(type === 'date'){
		return [year, month, day].map(formatNumber).join(sign)
	}else if(type ==='time'){
		return [hour, minute, second].map(formatNumber).join(':')
	}
}
