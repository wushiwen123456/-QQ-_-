

 // 获取专辑封面
import { req } from '@/network/request.js'

// const url = "http://imgcache.qq.com/music/photo/album_300/%i/300_albumpic_%i_0.jpg"  albumid%100, albumid
export function getAlbumid(albumid){
	
	const i1 = albumid%100
	return 'http://imgcache.qq.com/music/photo/album_300/'+i1+'/300_albumpic_'+albumid+'_0.jpg'
}
 