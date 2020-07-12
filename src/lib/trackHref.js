import {judgeClient,queryStringify} from './utils';
import './dsbridge';

export default (href) => {
    let urlinfo = href,
        app_type = judgeClient() == 'IOS' ? '15' : '14',
        params = {
            event_name: "mp95fenClick",
            host: "default",
            app_type: app_type,
            version: "1.0.0",
            mp_brand: "",
            urlinfo: urlinfo,
            click_time: new Date().getTime(),
	          sourceName:'',
            uid: "",
        },
        trackURl = "https://95fen.cn-hangzhou.log.aliyuncs.com/logstores/miniprogram/track.gif?APIVersion=0.6.0",
        img = new Image(1, 1);

    dsBridge.call("device.getSystemInfo", {}, function(res){
        let userInfo = JSON.parse(res);
        params.device_id = userInfo.device_id?userInfo.device_id:'';
        img.src = trackURl + queryStringify(params)
        img.onload = () => {
          img.onload = ""
        }
    })
}
