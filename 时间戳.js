/*时间戳*/
function changeByReg(num){
	num = num || 1493103810;
	var newDate = new Date();
	newDate.setTime(num * 1000);
	var str = newDate.toLocaleString()
	var reg_a = /[\u4e00-\u9fa5]|[/]/g

	var newstr = str.replace(reg_a,function(t){
		if(t === '/'){
			return '-';
		}
		if(/[\u4e00-\u9fa5]/.test(t)){
			return '';
		}
	})
	return newstr;
}