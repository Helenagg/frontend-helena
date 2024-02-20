import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';

interface NotificationState {
  timeoutId: number | null;
  msg: string | null;
  type: 'success' | 'error' | null;
}

const initialState: NotificationState = {
  timeoutId: null,
  msg: null,
  type: null,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Omit<NotificationState, 'timeoutId'>>) => {
      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
      }
      state.msg = action.payload.msg;
      state.type = action.payload.type;
    },
    removeNotification: (state) => {
      state.timeoutId = null;
      state.msg = null;
      state.type = null;
    },
  },
});

export const { addNotification, removeNotification } = notificationSlice.actions;

export const toast = (msg: string, type: 'success' | 'error', timeout: number = 5) => {
  return (dispatch: AppDispatch) => {
    const timeoutId = window.setTimeout(() => {
      dispatch(removeNotification());
    }, timeout * 1000);

    dispatch(addNotification({ msg, type }));
  };
};

export default notificationSlice.reducer;