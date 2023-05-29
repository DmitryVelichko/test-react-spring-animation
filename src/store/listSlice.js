import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: Date.now(),
        color: action.payload,
      };
      state.unshift(newItem);
    },
    removeItem: (state) => {
      state.pop();
    },
  },
});

export const { addItem, removeItem } = listSlice.actions;
export default listSlice.reducer;
