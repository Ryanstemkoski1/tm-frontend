import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface InformState {
  show: boolean;
  type: 'error' | 'success';
  message: string;
}

const initialState: InformState = {
  show: false,
  type: 'success',
  message: '',
};

export const counterSlice = createSlice({
  name: 'inform',
  initialState,
  reducers: {
    openInform: (state, action: PayloadAction<InformState>) => {
      state.show = action.payload.show;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    closeInform: (state) => {
      state.show = initialState.show;
      state.message = initialState.message;
      state.type = initialState.type;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openInform, closeInform } = counterSlice.actions;

export default counterSlice.reducer;
