import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  selectToken,
  selectLoggedIn,
  selectIsRefreshing,
} from "./auth/authSelectors";
import {
  selectContacts,
  selectVisibleContacts,
  selectUpdateContact,
} from "./constants/constantsSelectors";
import { selectFilters } from "./filters/filterSelectors";
import {
  getUser,
  createUser,
  loginUser,
  logoutUser,
} from "./auth/authOperations";
import {
  getContact,
  addContact,
  deleteContact,
  updateContact,
} from "./constants/constantsOperations";
import { setStatusFilter } from "./filters/filtersSlice";
import { useCallback } from "react";
// import * as actions from "./constants/contactsSlice";
import * as actions from "./auth/authSlice";

export const usePhonebook = () => {
  const dispatch = useDispatch();

  const isUser = useSelector(selectUser);
  const isToken = useSelector(selectToken);
  const IsRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectLoggedIn);
  const valueContacts = useSelector(selectContacts);
  const valueFilters = useSelector(selectFilters);
  const visibleContacts = useSelector(selectVisibleContacts);
  const getUpdate = useSelector(selectUpdateContact);

  const getNewUser = useCallback(() => dispatch(getUser()), [dispatch]);

  const createNewUser = (newUser) => {
    dispatch(createUser(newUser));
  };
  const loginNewUser = (dataUser) => {
    dispatch(loginUser(dataUser));
  };
  const logoutNewUser = () => {
    dispatch(logoutUser());
  };

  const getUser = (dataUser) => {
    dispatch(actions.getUser(dataUser));
  };

  //! ##################################################################
  const getContacts = useCallback(() => dispatch(getContact()), [dispatch]);

  const getUpdateContacts = (updateContact) => {
    dispatch(actions.getUpdateContact(updateContact));
  };

  const addContacts = (newContact) => {
    dispatch(addContact(newContact));
  };

  const deleteContacts = (id) => {
    dispatch(deleteContact(id));
  };

  const updateContacts = (newContact) => {
    dispatch(updateContact(newContact));
  };

  const filterContact = (updatedTodo) => {
    dispatch(setStatusFilter(updatedTodo));
  };

  return {
    isUser,
    isToken,
    IsRefreshing,
    isLoggedIn,
    valueContacts,
    valueFilters,
    visibleContacts,
    getUpdate,
    getContacts,
    addContacts,
    deleteContacts,
    filterContact,
    updateContacts,
    getUpdateContacts,
    getNewUser,
    createNewUser,
    loginNewUser,
    logoutNewUser,
    getUser,
  };
};
