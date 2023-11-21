// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

function getSeo(pageName){
	//1.创建请求对象
	const xhr = new XMLHttpRequest()

	//2.配饰请求方法，设置请求接口地址
	//这里我以木小果接口来测试，如果接口无法使用，各位小伙伴可以自行到木小果中获取接口
	xhr.open('get','https://'+window.location.host+'/els/seo/noToken/queryByPageName?pageName='+pageName)

	//3.发送请求
	xhr.send()

	//4.网络请求返回的数据
	// xhr.readystate===4代表响应完成了，xhr.status === 200 代表请求成功
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var res = JSON.parse(xhr.responseText)
			console.log(res)
			if (res.code==200&&res.result){
				document.querySelector('meta[name="Keywords"]').setAttribute('content',res.result.seoKeyword);
				document.querySelector('title').innerHTML=res.result.title;
				document.querySelector('meta[name="Description"]').setAttribute('content',res.result.description);
			}
		}
	}
}
function getHost(hostAddressSign) {
	// console.log('aaaaaaaaaa',window.location.href)
	if(window.location.href.indexOf('localhost')>-1){
		console.log(hostAddressSign,'hostAddressSign')
		switch(hostAddressSign){
			case 'els': {
				return axios.defaults.baseURL = 'https://xgw-cs.51qqt.com/els';
				// return axios.defaults.baseURL = 'https://51qqt.com/els';
			}
		}
	}
	return axios.defaults.baseURL = '/els';
}
// 客服代码
setTimeout(()=>{
	var _hmt = _hmt || [];
	(function() {
		var hm = document.createElement("script");
		hm.src = "https://hm.baidu.com/hm.js?421bca2d35adfb2b4919c4a19acd0384";
		var s = document.getElementById("app");
		s.parentNode.insertBefore(hm, s);
	})();
},1)





/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */

function get(url, params){    
    return new Promise((resolve, reject) =>{
        axios.get(url, {            
            params: params        
        })        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
function post(url, params,type) {    
    return new Promise((resolve, reject) => {  
		if(type=="json"){
			axios.post(url, params)
			.then(res => {            
			    resolve(res.data);        
			})        
			.catch(err => {            
			    reject(err.data)        
			})    
		}else{
			axios.post(url, Qs.stringify(params))
			.then(res => {            
			    resolve(res.data);        
			})        
			.catch(err => {            
			    reject(err.data)        
			})    
		}
        
    });
}


