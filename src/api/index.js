//当前这个模块：api进行统一管理
import requests from "./request";

//三级联动的接口
///api/product/getBaseCategoryList get 无参数

// export const reqCategoryList=()=>{
//     //发请求
//     return requests({
//         url:'product/getBaseCategoryList',
//         method:'get'
//     });
// }

// 查询角色详细，烘烤项目用的
/* export function getRole(roleId) {
    return request({
      url: '/system/role/' + roleId,
      method: 'get'
    })
  }
 */

//简写
export const reqCategoryList = ()=>requests({ 
    url:'product/getBaseCategoryList',
    method:'get'
});