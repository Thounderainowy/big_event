// 封装的是具体的接口请求方法
// 注意: 每个方法只负责请求一个 URL 地址
// import store from '@/store'
import request from '@/utils/request'

// 导出接口方法，为了在逻辑页面引入后调用
/**
 * 注册接口
 * @param {*} param0
 * { username: 用户名, password: 密码, repassword: 确认密码 }
 * @returns Promise 对象
 */
export const registerAPI = ({ username, password, repassword }) => { // ！！！此处传参应为对象
// export const registerAPI = () => {
  // Promise 对象（内部包含原生 ajax 请求）
  // 返回该 Promise 对象，到逻辑页面进行处理
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username,
      password,
      repassword
    }
  })
}

/**
 * 登录接口
 * @param {*} param0
 * { username: 用户名, password: 密码 }
 * @returns Promise 对象
 */
export const loginAPI = ({ username, password }) => {
  // 返回 Promise 对象，到逻辑页面进行处理
  return request({
    url: '/api/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

/**
 * 获取用户信息
 * @returns Promise 对象
 */
export const getUserInfoAPI = () => {
  return request({
    url: '/my/userinfo'
    // method 默认为 GET 方式请求
    // 传参数给后台：params(查询字符串query)，data(请求体body)，headers(请求头)
    // headers: {
    //   Authorization: store.state.token
    // }
  })
}

/**
 * 获取侧边栏数据
 * @returns Promise 对象
 */
export const getMenusListAPI = () => {
  return request({
    url: '/my/menus'
    // headers: {
    //   Authorization: store.state.token
    // }
  })
}

/**
 * 更新用户信息
 * @param {*} param0
 * { id: id, nickname: 昵称, email: 邮箱, username: 用户名, user_pic: 头像 }
 * @returns Promise 对象
 */
export const setUserInfoAPI = ({ id, nickname, email, username, user_pic }) => {
  return request({
    url: '/my/userinfo',
    method: 'PUT',
    data: {
      id,
      nickname,
      email,
      username,
      user_pic
    }
  })
}

/**
 * 更新用户头像
 * @param {*} avatar: 头像base64字符串
 * @returns Promise 对象
 */
export const updateAvatarAPI = (avatar) => {
  return request({
    url: '/my/update/avatar',
    method: 'PATCH',
    data: {
      avatar
    }
  })
}

/**
 * 更新用户密码
 * @param {*} param0
 * { old_pwd: 旧密码, new_pwd: 新密码, re_pwd: 确认新密码 }
 * @returns Promise 对象
 */
export const updatePwdAPI = ({ old_pwd, new_pwd, re_pwd }) => {
  return request({
    url: '/my/updatepwd',
    method: 'PATCH',
    data: {
      old_pwd,
      new_pwd,
      re_pwd
    }
  })
}

/**
 * 获取文章分类
 * @returns Promise 对象
 */
export const getArticleCateAPI = () => {
  return request({
    url: '/my/cate/list'
  })
}

/**
 * 添加文章分类
 * @param {*} param0
 * { cate_name: 分类名称, cate_alias: 分类别名 }
 * @returns Promise 对象
 */
export const addArticleCateAPI = ({
  cate_name,
  cate_alias
}) => {
  return request({
    url: '/my/cate/add',
    method: 'POST',
    data: {
      cate_name,
      cate_alias
    }
  })
}

/**
 * 修改文章分类
 * @param {*} param0
 * { id: id, cate_name: 分类名称, cate_alias: 分类别名 }
 * @returns Promise 对象
 */
export const updateArticleCateAPI = (id, { cate_name, cate_alias }) => {
  return request({
    url: '/my/cate/info',
    method: 'PUT',
    data: {
      id,
      cate_name,
      cate_alias
    }
  })
}

/**
 * 删除文章分类
 * @param {*} id: 文章分类id
 * @returns Promise 对象
 */
export const deleteArticleAPI = (id) => {
  return request({
    url: '/my/cate/del',
    method: 'DELETE',
    params: {
      id
    }
  })
}

/**
 * 发布文章
 * @param {*} fd 表单对象
 * @returns Promise 对象
 */
export const pubArticleAPI = (fd) => {
  return request({
    url: '/my/article/add',
    method: 'POST',
    data: fd
  })
}

/**
 * 获取文章列表
 * @param {*} param0
 * { pagenum：当前页码数, pagesize：页面显示条数, cate_id：文章分类id, state：文章发布状态 }
 * @returns Promise 对象
 */
export const getArticleListAPI = ({ pagenum, pagesize, cate_id, state }) => {
  return request({
    url: '/my/article/list',
    params: {
      pagenum,
      pagesize,
      cate_id,
      state
    }
  })
}

/**
 * 获取文章详情
 * @param {*} id: 文章id
 * @returns Promise 对象
 */
export const getArticleDetailAPI = (id) => {
  return request({
    url: '/my/article/info',
    params: {
      id
    }
  })
}

export const delArticleAPI = (id) => {
  return request({
    url: '/my/article/info',
    method: 'DELETE',
    params: {
      id
    }
  })
}
