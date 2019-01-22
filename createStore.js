import createActions from './createActions';

export  default  createStore = store =>{
  var actions = createActions(store)
  return {...store.state, ...actions}

}
