import { configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/allPostsReducer';
import notificationReducer from './reducers/notificationReducer';

// const combinedReducer = combineReducers({
//     allPosts: postReducer
// })

// const rootReducer = (state, action) => {
//   return combinedReducer(state, action);
// }

const store = configureStore({
  reducer: {
    allPosts: postReducer,
    notification: notificationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
