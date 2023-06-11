import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export interface InitialState {
  addAuthorModal: boolean;
}

const initialState: InitialState = {
  addAuthorModal: false,
};

export const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    addAuthorModalReducer: state => {
      state.addAuthorModal = !state.addAuthorModal;
    },
  },
});

export const authorState = (state: RootState) => state.author;

export const { addAuthorModalReducer } = authorSlice.actions;

export default authorSlice.reducer;
