import './dsbridge';
export default async function fetchAccessToken() {
    return new Promise((resolve, reject) => {
        dsBridge.call("account.getLoginToken", {}, function(res){
            if (res == ''||JSON.parse(res).access_token == '') {
                resolve({status:2001})
            }else{
                dsBridge.call('account.getUserInfo', {}, function(UserInfo){
                    if (JSON.parse(UserInfo).mobile&&JSON.parse(UserInfo).mobile!="") {
                        resolve(JSON.parse(res))
                    }else{
                        resolve({status:2001})
                    }
                })
            }
        })
        // resolve({'access_token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuOTVmZW5hcHAuY29tIiwiZXhwIjoxNTgxNDIxMjE1LCJzdWIiOiJhdXRoIiwiYXVkIjoid3d3Ljk1ZmVuYXBwLmNvbSIsIm5iZiI6MTU4MDk4OTIxNSwiaWF0IjoxNTgwOTg5MjE1LCJqdGkiOjEwMDAxLCJzY29wZXMiOiJyb2xlX2FjY2VzcyIsInVpZCI6IjEwNjYiLCJ1c2VybmFtZSI6Ilx1MzAwMiJ9.kTiBnmDuWnUbvqmSOqC-bBmczZTTPligpm2uh9WPxwY'})
    })
}
