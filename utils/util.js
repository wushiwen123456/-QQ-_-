export function getSongListData(data,keyword,list,fn){
	const [req,res] = data
	const lastIndex = res.data.lastIndexOf(')')
	let res1 = res.data.replace('callback','')
	res1 = res1.slice(1,res1.length-1)
	const arr = fn(JSON.parse(res1).data.song.list,keyword)
	list.push(...arr)
}