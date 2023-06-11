import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from 'store/store';

export interface CommonInterface {
  limit: number;
}

const initialState: CommonInterface = {
  limit: 10,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<{ limit: number }>) => {
      state.limit = action.payload.limit;
    },
  },
  // extraReducers: builder => {
  //   builder.addCase(fetchUserById.fulfilled, (state, action) => {
  //     state.entities.push(action.payload);
  //   });
  // },
});

// export const selectCommon = (state: RootState) => state.common;

export const { setLimit } = commonSlice.actions;

export default commonSlice.reducer;
