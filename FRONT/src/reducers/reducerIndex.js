import { combineReducers } from 'redux';
import SampleReducer from './reducerNumber';
const rootReducer = combineReducers({
  number: SampleReducer
});

export default rootReducer;
