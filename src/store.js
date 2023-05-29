import { configureStore } from '@reduxjs/toolkit';
import listReducer from './store/listSlice';

const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export default store;
