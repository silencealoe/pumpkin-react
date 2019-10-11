import {takeEvery,put}from 'redux-saga/effects'
import {GET_SAGA_LIST} from './actionTypes'
import {getTodoListAction} from './actionCreator'
import axios from 'axios'


function* mySaga(){
  //等待捕获action
  yield takeEvery(GET_SAGA_LIST,getSagaList)
   
}

function* getSagaList(){
  const res= yield axios.get('http://rap2api.taobao.org/app/mock/232506/getTodoList')
  const action =getTodoListAction(res.data.list)
  yield put(action)
}
export default mySaga