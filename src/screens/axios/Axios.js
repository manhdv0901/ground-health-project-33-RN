import axios from 'axios';
const URL_API = 'https://web-test-3010.herokuapp.com';
// const URL_API = 'http://192.168.0.100:3000';

const METHOD_GET = 'GET';
const METHOD_POST ='POST';
const METHOD_PUT = 'PUT';

const requestAPI = async (method, url,dataBody, headers = {}) =>{
    headers['Content-Type'] = headers['Content-Type']
    ? headers['Content-Type']
    : 'application/json';
    headers.accept = 'application/json';
    const config ={
        timeout: 10000,
        url:`${URL_API}${url}`,
        headers,
        method,
    };

    if(method === METHOD_GET){
        config.params = dataBody;
    }else{
        config.data = dataBody;
    }
    console.log(config);

    return axios(config)
    .then(res => {
        // console.log('data api --> ', res.data);
        return res.data; // dòng này sẽ trả về dữ liệu từ api là res, còn data là dữ liệu người dùng được lấy từ api
    })
    .catch(err => {
        console.log('Disconnected to api, err: ', err);
    })
};

export default {
    get(url, dataBody, headers={}){
        return requestAPI(METHOD_GET, url, dataBody, headers);
    },
    post(url, dataBody, headers = {}){
        return requestAPI(METHOD_POST, url, dataBody, headers);
    },
    put(url, dataBody, headers = {}){
        return requestAPI(METHOD_PUT, url, dataBody, headers);
    }
}