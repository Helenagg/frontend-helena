import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './reducers/notificationReducer';
import allPostsReducer from './reducers/allPostsReducer';
import postEditReducer from './reducers/postEditReducer';

// const combinedReducer = combineReducers({
//     allPosts: postReducer
// })

// const rootReducer = (state, action) => {
//   return combinedReducer(state, action);
// }

const store = configureStore({
  reducer: {
    allPosts: allPostsReducer,
    notification: notificationReducer,
    post: postEditReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
