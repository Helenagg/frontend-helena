import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PostServices from '../services/PostServices';
import { AppDispatch } from '../store';
import { toast } from './notificationReducer';
import { PotsTexts } from '../locale/en';

interface Post {
  userId: number;
  id: number;
  title?: string;
  body?: string;
}

interface PostState {
  data: Post | null;
  loading: boolean;
  error: null | string;
}

const initialState: PostState = {
  data: null,
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost(state, action: PayloadAction<Post>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    updatePost(state, action: PayloadAction<Post>) {
      // const index = state.data.findIndex(
      //   (post) => post.id === action.payload.id
      // );
      // if (index !== -1) {
      //   state.data[index] = action.payload;
      // }
      state.data = action.payload;
    },
    setPostLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setPostError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setPost, updatePost, setPostLoading, setPostError } = postSlice.actions;

export const initializePost = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setPostLoading());
      const { data } = await PostServices.getPost(id);
      dispatch(setPost(data));
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        dispatch(setPostError(error.message));
        dispatch(toast(PotsTexts.LOADING_ERROR, 'error'));
      } else {
        // Manejo de errores no estándar
        console.error('An unexpected error occurred');
        dispatch(setPostError('An unexpected error occurred'));
        dispatch(toast(PotsTexts.LOADING_ERROR, 'error'));
      }
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
      if (error instanceof Error) {
        console.error(error.message);
        dispatch(setPostError(error.message));
        dispatch(toast(PotsTexts.EDITED_ERROR, 'error'));
      } else {
        // Manejo de errores no estándar
        console.error('An unexpected error occurred');
        dispatch(setPostError('An unexpected error occurred'));
        dispatch(toast(PotsTexts.EDITED_ERROR, 'error'));
      }
    }
  };
};

export default postSlice.reducer;