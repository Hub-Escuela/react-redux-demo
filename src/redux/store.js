import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import usersReducer from './users/usersSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
