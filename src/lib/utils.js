/**
 * 封装常用的通用功能函数
 */

// 获取链接参数
export function getParams (name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return '';
}

// 判断是否在95分APP中
export function isFen95() {
    let ua = navigator.userAgent.toLowerCase();
    if(ua.indexOf('fen95') > -1||ua.indexOf('95fen') > -1){
        return true
    }else{
        return false
    }
}

// 判断是否在微信浏览器
export function isWeiXin(){
    let ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

// 判断客户端
export function judgeClient() {
    let inBrowser = typeof window !== 'undefined',
    UA = inBrowser && window.navigator.userAgent.toLowerCase(),
    isAndroid = UA && UA.indexOf('android') > -1,
    isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	if (isAndroid) {
		return "Android";
	} else if (isIOS) {
		return "IOS";
	} else {
		return "PC";
	}
}

// 对象转URL参数
export function queryStringify(obj){
    let uri = ''
    Object.keys(obj).forEach((item)=>{
      uri += '&' + item + '=' + encodeURIComponent(obj[item])
    })
    return uri
}

//获取URL参数
export function getUrlKey(url,name){
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [, ""])[1].replace(/\+/g, '%20')) || ''
}
