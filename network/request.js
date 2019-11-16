/*
	config:Object
	url :  String/path
	data:  String/data
*/
export function req (config){
  return uni.request({
      url: config.url,
	  data:config.data || ''
    })
}