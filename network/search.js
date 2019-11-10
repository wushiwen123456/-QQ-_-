import { req } from '@/network/request.js'
const url = 'https://c.y.qq.com/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0'
export function getSearchData(p,n,w){
	console.log(p,n,w)
	return req({
		url:url,
		data:{
			p,n,w
		}
	})
}


	


// "http://imgcache.qq.com/music/photo/album_300/34/300_albumpic_58234_0.jpg"

// https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json205361747&platform=yqq&cid=205361747&songmid=003lghpv0jfFXG&filename=C4000016diYR2yZ3qe.m4a&guid=126548448

// "C4000016diYR2yZ3qe.m4a"

// http://ws.stream.qqmusic.qq.com/C4000016diYR2yZ3qe.m4a?fromtag=0&guid=126548448&vkey=5BC300D10D01417B1716EABF732ADE4B53FFE5EB3925AEB93313FF6009AB985831061567097794220CA9B22F300317D12ED243B3368362B5

