import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./contactsOps";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  // reducers: {
  //   // addContact: (state, action) => {
  //   //   state.items.push(action.payload);
  //   // },
  //   // deleteContact: (state, action) => {
  //   //   state.items = state.items.filter((item) => item.id !== action.payload);
  //   // },
  //   fetchingInProgress(state) {
  //     state.loading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.loading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.loading = false;
  //     state.error = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const {
//   // addContact,
//   // deleteContact,
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } = slice.actions;

// export const selectContacts = (state) => state.contacts.items;

// export default slice.reducer;

// export const contactsReducer = slice.reducer;

export default contactsSlice.reducer;
