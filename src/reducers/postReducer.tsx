import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PostServices from './../services/PostServices';
import { AppDispatch } from './../store';
import { toast } from './notificationReducer';
import { PotsTexts } from '../locale/es';

interface Post {
  userId: number;
  id: number;
  title?: string;
  body?: string;
}

interface PostState {
  data: Post[];
  loading: boolean;
  error: null | string;
}

const initialState: PostState = {
  data: [],
  loading: false,
  error: null,
};

const allPostsSlice = createSlice({
  name: 'allPosts',
  initialState,
  reducers: {
    setAllPosts(state, action: PayloadAction<Post[]>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    updatePost(state, action: PayloadAction<Post>) {
      const index = state.data.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    removePost(state, action: PayloadAction<number>) {
      state.data = state.data.filter((post) => post.id !== action.payload);
    },
    setPostsLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setPostsError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setAllPosts,
  updatePost,
  removePost,
  setPostsLoading,
  setPostsError,
} = allPostsSlice.actions;

export const initializeAllPost = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setPostsLoading());
      const { data } = await PostServices.getPost();
      dispatch(setAllPosts(data));
    } catch (error) {
      console.error(error);
      dispatch(setPostsError(`${error}`));
      dispatch(toast(PotsTexts.LOADING_ERROR, 'error'));
    }
  };
};

export const updatePostAction = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await PostServices.updatePost(id);
      const updatedPost = response.data;
      dispatch(updatePost(updatedPost));
      dispatch(toast(PotsTexts.EDITED, 'success'));
    } catch (error) {
      console.error(error);
      dispatch(setPostsError(`${error}`));
      dispatch(toast(PotsTexts.EDITED_ERROR, 'error'));
    }
  };
};

export const deletePostAction = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      await PostServices.deletePost(id);
      dispatch(removePost(id));
      dispatch(toast(PotsTexts.DELETED, 'success'));
    } catch (error) {
      console.error(error);
      dispatch(setPostsError(`${error}`));
      dispatch(toast(PotsTexts.DELETED_ERROR, 'error'));
    }
  };
};

export default allPostsSlice.reducer;
