import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer.js'
// import createSagaMiddleware from 'redux-saga'
// import mySaga from './saga' 
// const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store=createStore(reducer,enhancer)   //同时使用中间件和redux dev tool
// sagaMiddleware.run(mySaga)
export default store