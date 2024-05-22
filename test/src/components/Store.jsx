// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers.jsx';

const store = configureStore({
  reducer: rootReducer
});

export default store;