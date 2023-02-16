import { createSlice } from '@reduxjs/toolkit';

export const seatSlice = createSlice({
  name: 'cat',
  initialState: {
    cats: [],
  },
  reducers: {
    storeSeats: (state, action) => {
      state.seat = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeSeats } = seatSlice.actions;

export default seatSlice.reducer;
