import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import characterInformationReducer from "../features/CharacterInformation/CharacterInformationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    characterInformation: characterInformationReducer,
  },
});
