import { configureStore, createSlice } from "@reduxjs/toolkit";

// // Starting of Authentication Slice and Reducer Function-----------------------------------------------
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
// // Ending of Authentication Slice and Reducer Function-----------------------------------------------

// // Starting of All Mails Slice and Reducer Function-----------------------------------------------
const INITIAL_All_MAILS = {
  mails: [],
  receiversId: null,
  sents: [],
};

const mailsSlice = createSlice({
  name: "allMails",
  initialState: INITIAL_All_MAILS,
  reducers: {
    sendingMails: (state, action) => {
      state.mails = action.payload.mails;
      state.receiversId = action.payload.receiversId;
      state.sents = action.payload.sents;
    },
  },
});

// // Ending of All Mails Slice and Reducer Function-----------------------------------------------

// // Starting of Redux Store with Reducers-----------------------------------------------
const reduxStore = configureStore({
  reducer: {
    authentication: authSlice.reducer,
    electronicMails: mailsSlice.reducer,
  },
});
// // Ending of Redux Store with Reducers-----------------------------------------------

// // Starting of Authentication Actions Function-----------------------------------------------
export const { setLogIn, setLogOut } = authSlice.actions;
// // Ending of Authentication Actions Function-----------------------------------------------

// // Starting of Authentication Actions Function-----------------------------------------------
export const { sendingMails } = mailsSlice.actions;
// // Ending of Authentication Actions Function-----------------------------------------------
export default reduxStore;
