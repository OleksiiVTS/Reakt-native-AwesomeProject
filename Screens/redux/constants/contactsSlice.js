import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import {
  getContact,
  addContact,
  deleteContact,
  updateContact,
} from './constantsOperations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    dataContacts: [],
    updateContact: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    getUpdateContact: (state, action) => {
      const { id, name, number } = action.payload;
      state.updateContact = { id, name, number };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContact.fulfilled, (state, action) => {
        state.dataContacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.dataContacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.dataContacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.dataContacts.splice(index, 1);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.dataContacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.dataContacts.splice(index, 1, action.payload);
        state.updateContact = null;
      })
      .addMatcher(
        isAnyOf(
          isPending(getContact, addContact, deleteContact, updateContact)
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          isRejected(getContact, addContact, deleteContact, updateContact)
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          isFulfilled(getContact, addContact, deleteContact, updateContact)
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const { getUpdateContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  {
    key: 'ist_contacts',
    storage,
    whitelist: ['token'],
  },
  contactsSlice.reducer
);
