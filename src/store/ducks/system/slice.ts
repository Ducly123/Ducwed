import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface TSystemReducer {
  name: string;
}

const initialState = {
  name: 'Digital Marketplace',
} as TSystemReducer;

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      return {
        ...state,
        language: action.payload,
      };
    },
  },
});

export const getSystem = (state: RootState): TSystemReducer => state.system;

export const getName = (state: RootState): any => state.system.name;

export const { setName } = systemSlice.actions;
export default systemSlice.reducer;
