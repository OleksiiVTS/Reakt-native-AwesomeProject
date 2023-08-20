import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContact = createAsyncThunk(
  'contacts/getContact',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contacts);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contacts, thunkAPI) => {
    const { id, name, number } = contacts;
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
