import request from "./http"
request.Int()
// 登录接口
export const loginApi = (params: { username: string, password: string }) => request.post("/admin/login", params)
// 左侧菜单
export const leftApi = (page: number) => request.get(`/admin/image_class/${page}`, { limit: 10 })
//图片列表
export const photoApi = (id: number, page: number) => request.get(`/admin/image_class/${id}/image/${page}`, { limit: 10 })

// 修改图片
export const editApi = (id: number, data: any) => request.post(`/admin/image/${id}`, data)
// 删除图片
export const delApi = (data: any) => request.post("/admin/image/delete_all", data)