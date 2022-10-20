import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxAni: {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  },
  isLoading: true,
};

const animationSlice = createSlice({
  name: "animation",
  initialState,
  reducers: {
    toggleAni: (state, action) => {
      state.boxAni = action.payload;
    },
    toggleIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const { toggleAni, toggleIsLoading } = animationSlice.actions;
export default animationSlice.reducer;
