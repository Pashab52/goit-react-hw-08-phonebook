import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, editContact } from './operations';

const phonebookInitialState = {
  contacts: {
    items: [
       ],
    isLoading: false,
    error: null,
  },
  filter: '',
};

 

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: phonebookInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },

 

  extraReducers: builder =>
  {
    builder
      // .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        handleFulfilled(state);

        state.contacts.items = [...action.payload];
      })
      // .addCase(fetchContacts.rejected, handleRejected)

      // .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.contacts.items = [action.payload, ...state.contacts.items];
      })
      // .addCase(addContact.rejected, handleRejected)

      // .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      // .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items[index].name = action.payload.name;
        state.contacts.items[index].number = action.payload.number;
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          editContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          editContact.rejected
        ),
        handleRejected
      );
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

