import axios from "axios";

let baseUrl = "http://192.168.0.108:1314";

const instance = axios.create({
    timeout: 5000, // 超时时间
    baseURL: baseUrl
});

instance.interceptors.request.use(
	function(config) {
		config.headers["authorization"] = "Bearer " + localStorage.getItem("token");
		return config;
	},
	function(error) {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	function(response) {
		if (response.status === 401) {
			//跳转login
		} else {
			// console.log("success");
		}
		return response;
	},
	function(error) {
		// 对响应错误做点什么
		return Promise.reject(error);
	}
);

// axios.defaults.headers.common['authorization'] = "Bearer " + localStorage.getItem('token')

export const GET = (url, params) => {
	return instance.get(`${baseUrl}${url}`, { params: params }).then(data => {
		return data;
	});
};

export const POST = (url, params) => {
	return instance.post(`${baseUrl}${url}`, params).then(data => {
		return data;
	});
};

export const PUT = (url, params) => {
	return instance.put(`${baseUrl}${url}`, params).then(data => {
		return data;
	});
};

export const DELETE = url => {
	return instance.delete(`${baseUrl}${url}`).then(data => {
		return data;
	});
};
