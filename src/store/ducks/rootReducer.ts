import { combineReducers } from '@reduxjs/toolkit';

import systemReducer from './system/slice';

const createRootReducer = () => {
  return combineReducers({
    system: systemReducer,
  });
};

export default createRootReducer;
