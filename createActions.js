import {_updateHomeData,_updateHomeTitle} from './states/homeState';

export default createActions = state =>{
  
  console.log("_updateHomeData",_updateHomeData.bind(state))
  console.log("state",state)
  return ({
  _updateHomeTitle: (action) => _updateHomeTitle(action, state)
})}
