import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'
const defaultdata={
  inputval:'',
  datalist:['你的假期已经结束','上班第一天，好疲倦','发现之前学的都忘记了哟']
}

//纯函数：传入什么参数，就返回这个参数，不依赖外部任何状态和数据的变化，函数内部没有与外部的交互，必须只依赖传入的参数

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
  return state
}) 