import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userreducer from "../slice/Userslice";
const reducer = combineReducers({
  userinfo: userreducer,
});

export const store = configureStore({
  reducer,
  middleware: (getdefaultmiddleware) =>
    getdefaultmiddleware({ serializableCheck: false }),
});
