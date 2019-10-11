import {CHANGE_INPUT , ADD_ITEM,DELETE_ITEM,FOOTER_SHOW,GETLIST,GET_SAGA_LIST}  from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})
export const footerShowAction = (footerShow)=>({
    type:FOOTER_SHOW,
    footerShow
})
export const getTodoListAction = (list)=>({
    type:GETLIST,
    list
})
export const getSagaTodoListAction = ()=>({
    type:GET_SAGA_LIST
})
//没有中间件之前函数返回都是对象，有了中间件可以返回一个函数，就可以把异步请求放入函数中了 
//使用thunk中间件
export const getTodoList = ()=>{  
    return (dispatch)=>{  //redux-thunk支持将disptach作为参数
        axios.get('http://rap2api.taobao.org/app/mock/232506/getTodoList').then(res=>{
            // console.log(res.data.list)
            const getlistAction = getTodoListAction(res.data.list)
            dispatch(getlistAction)
          })
    }
}
