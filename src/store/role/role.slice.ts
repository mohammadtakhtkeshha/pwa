import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export interface InitialState {
  addRoleModal: boolean;
}

const initialState: InitialState = {
  addRoleModal: false,
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    addRoleModalReducer: state => {
      state.addRoleModal = !state.addRoleModal;
    },
  },
});

export const roleState = (state: RootState) => state.role;

export const { addRoleModalReducer } = roleSlice.actions;

export default roleSlice.reducer;
