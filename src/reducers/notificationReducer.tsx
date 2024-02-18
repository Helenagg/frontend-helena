import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    timeoutId: null,
    msg: null,
    type: null,
  },
  reducers: {
    addNotification: (state, action) => {
      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
      }
      state.msg = action.payload.msg;
      state.type = action.payload.type;
      state.timeoutId = action.payload.timeoutId;
    },
    removeNotification: (state) => {
      state.timeoutId = null;
      state.msg = null;
      state.type = null;
    },
  },
});

export const { addNotification, removeNotification } =
  notificationSlice.actions;

export const toast = (msg: string, type: string, timeout: number = 5) => {
  return (dispatch: AppDispatch) => {
    const timeoutId = setTimeout(
      () => dispatch(removeNotification()),
      timeout * 1000
    );
    const notification = {
      msg,
      type,
      timeoutId: timeoutId as unknown as number | null,
    };
    dispatch(addNotification(notification));
  };
};

export default notificationSlice.reducer;