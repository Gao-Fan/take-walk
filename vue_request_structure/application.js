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
