import axios, { AxiosInstance } from "axios";
import { ElLoading } from "element-plus";

class Request {
    instance: AxiosInstance
    loading: any
    constructor() {
        this.instance = axios.create({
            baseURL: "http://shop_api.chaohua-sxx.cn/",
            timeout: 10000
        })
    }

    reqInt() {
        this.instance.interceptors.request.use(config => {
            var token = localStorage.getItem('token')
            config.headers.token = token
            this.loading = ElLoading.service({
                text: "拼命加载中"
            })
            return config
        }, err => {
            this.loading.close()
            throw new Error(err)
        })
    }
    resInt() {
        this.instance.interceptors.response.use(result => {
            this.loading.close()
            return result.data
        }, err => {
            this.loading.close()
            throw new Error(err)
        })
    }
    Int() {
        this.reqInt()
        this.resInt()
    }
    async get(url: string, params?: any) {
        let data = await this.instance({
            method: "get",
            url: url,
            params: params

        })
        return data
    }
    async post(url: string, params?: any) {
        let data = await this.instance({
            method: "post",
            url: url,
            data: params

        })
        return data
    }
}
export default new Request()