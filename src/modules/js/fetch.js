import axios from 'axios'
import url from 'js/api.js'

function fetch(url,data){
	return new Promise((resolve,reject)=>{
		axios.post(url,data).then(res=>{
			resolve(res)
		},(error)=>{
			reject(error)
		})
	})
}

export default fetch