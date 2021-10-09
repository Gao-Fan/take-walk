import request from '@/utils/request'

/**
 * description 获得列表
 */
export function getDataList(data) {
  return request({
    url: 'xxx/****/list',
    method: 'post',
    data
  })
}






getDataList(data).then(res => {
  this.list = res.data.list
}).catch(err => {
  this.$notify.error({ title: '错误', message: '获取列表失败：' + err.message })
})
