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
    // setIsUserLogIn: (state, action) => {
    //   state.isUserLogIn = true;
    // },
    setLogIn: (state, action) => {
      state.isUserLogIn = true;
      state.userToken = action.payload.userToken;
      state.userIdentity = action.payload.userIdentity;
    },
    setLogOut: (state, action) => {
      state.isUserLogIn = false;
      state.userToken = "";
      state.userIdentity = null;
    },
  },
});

const reduxStore = configureStore({
  reducer: {
    authentication: authSlice.reducer,
  },
});

export const { setLogIn, setLogOut } = authSlice.actions;

export default reduxStore;
