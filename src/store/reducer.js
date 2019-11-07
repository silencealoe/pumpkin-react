import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,FOOTER_SHOW,GETLIST} from './actionTypes'
const defaultdata={
  inputval:'',
  datalist:['你的假期已经结束','上班第一天，好疲倦','发现之前学的都忘记了哟'],
  footerShow:true
}

//纯函数：传入什么参数，就返回这个参数，不依赖外部任何状态和数据的变化，函数内部没有与外部的交互，必须只依赖传入的参数
//为什么要创建副本state
//redux下所有通过reducer更新state的记录，每一个记录都对应内存中的某一个具体state
//让用户可以追溯到每一次历史操作产生与执行时,当时的具体状态,这也是使用redux管理状态的重要优势之一
//若不创建副本,redux的所有操作都将指向内存中的同一个state,我们将无从获取每一次操作前后,state的具体状态与改变,若没有副本,redux-devtools列表里所有的state都将被最后一次操作的结果所取代.我们将无法追溯state变更的历史记录.

export default ((state = defaultdata,action)=>{
  // console.log(state,action)
  if(action.type === CHANGE_INPUT){
    let newState=JSON.parse(JSON.stringify(state))
    newState.inputval=action.value
    return newState
  }
  if(action.type === ADD_ITEM){
    let newState=JSON.parse(JSON.stringify(state))
    newState.datalist.push(newState.inputval)
    newState.inputval=''
    return newState    
  }
  if(action.type === DELETE_ITEM){
    let newState=JSON.parse(JSON.stringify(state))
    newState.datalist.splice(action.index,1)
    return newState
  }
  if(action.type === FOOTER_SHOW){
    let newState=JSON.parse(JSON.stringify(state))
    newState.footerShow = action.footerShow
    return newState
  }

  if(action.type === GETLIST){
    let newState=JSON.parse(JSON.stringify(state))
    newState.datalist=action.list
    return newState
  }
  // if(action.type === GET_SAGA_LIST){
  //   let newState=JSON.parse(JSON.stringify(state))
  //   newState.datalist=action.list
  //   return newState
  // }
  return state
}) 