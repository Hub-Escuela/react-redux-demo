import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    list: []
  },
  reducers: {
    findStarted: state => {
      //Devolvemos un nuevo estado de forma inmutable.
      return {...state, isLoading: true};
    },
    findSuccess: (state, action) => {
      //Modificamos state de forma mutable, pero Redux Toolkit lo hace inmutable por nostros.
      state.list = action.payload;
      state.isLoading = false;
    },
  },
});

export const { findStarted, findSuccess } = usersSlice.actions;


export const selectIsLoading = state => state.users.isLoading;
export const selectUsersList = state => state.users.list;


export default usersSlice.reducer;
