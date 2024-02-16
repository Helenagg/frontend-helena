import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/postReducer';

const combinedReducer = combineReducers({
    allPosts: postReducer
})

const store = configureStore({
    reducer: {
      // tus reducers aquí
    },
  });
  
  // Tipa el dispatch para usarlo en toda tu aplicación
  export type AppDispatch = typeof store.dispatch;
  
  export default store;