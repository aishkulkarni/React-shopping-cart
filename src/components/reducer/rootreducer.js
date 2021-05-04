import { combineReducers } from "redux"

import cartReducer from './cartreducer';

const rootReducer = combineReducers({
  shop: cartReducer,
});

export default rootReducer;
