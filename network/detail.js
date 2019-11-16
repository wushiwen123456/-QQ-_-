

 // 获取专辑封面
import { req } from '@/network/request.js'

// const url = "http://imgcache.qq.com/music/photo/album_300/%i/300_albumpic_%i_0.jpg"  albumid%100, albumid
export function getAlbumid(albumid){
	
	const i1 = albumid%100
	return 'http://imgcache.qq.com/music/photo/album_300/'+i1+'/300_albumpic_'+albumid+'_0.jpg'
}

async function getToken(songmid){
	const [err,res] = await req({
		url:`https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?format=json205361747&platform=yqq&cid=205361747&songmid=${songmid}&filename=C400${songmid}.m4a&guid=126548448`
	})
	return {
		fileName:res.data.data.items[0].filename,
		vKey:res.data.data.items[0].vkey
	}
}

export async function getMp3Url(songmid) {
	const urlData = await getToken(songmid)
	if(!!urlData.vKey){
		return `http://ws.stream.qqmusic.qq.com/${urlData.fileName}?fromtag=0&guid=126548448&vkey=${urlData.vKey}`
	}
	return "亲，这是会员专享哦~"
}