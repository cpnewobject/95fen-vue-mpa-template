/*
 * @Author: chenpeng 
 * @Date: 2019-10-08 11:08:09 
 * @Last Modified by: chenpeng
 * @Last Modified time: 2019-12-06 12:19:17
 */

import md5 from 'md5'
export default (obj,secret_key)=>{
  let paramsToken = ""
  Object.keys(obj).sort().forEach((item)=>{
    if(obj[item]!=='' && obj[item]!==undefined && typeof obj[item] != 'object'){
      paramsToken += obj[item].toString()
    }
  })
  paramsToken += typeof secret_key != 'undefined' ? secret_key : 'xgcpyh666'
  return md5(paramsToken)
}

