import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    searchFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { searchFilter } = filtersSlice.actions;

// export const selectNameFilter = (state) => state.filters.name;

export default filtersSlice.reducer;
