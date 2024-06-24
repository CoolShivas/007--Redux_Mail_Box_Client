import { configureStore, createSlice } from "@reduxjs/toolkit";

const INITIAL_AUTH = {
  isUserLogIn: false,
  userToken: "",
  userIdentity: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: INITIAL_AUTH,
  reducers: {
    setIsUserLogIn: (state, action) => {
      state.isUserLogIn = true;
    },
  },
});

const reduxStore = configureStore({
  reducer: {
    authentication: authSlice.reducer,
  },
});

export const { setIsUserLogIn } = authSlice.actions;

export default reduxStore;
