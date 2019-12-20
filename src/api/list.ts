import axios from 'axios'
import store from '@/store'

const users = axios.create({
  baseURL: 'https://app.fakejson.com/q',
  timeout: 10000
})
users.interceptors.response.use(
  response => {
    const res: any = response.data
    if (response.status !== 200) {
      store.dispatch('SET_ERROR', true)
      return Promise.reject(new Error('Error'))
    } else {
      return res
    }
  },
  error => {
    store.dispatch('SET_ERROR', true)
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export function getList(data: any) {
  return users({
    method: 'post',
    data
  })
}
