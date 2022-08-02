import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characterName: "",
  class: "",
  level: null,
  race: "",
  alignment: null,
  background: "",
  playerName: "",
  experiencePoints: null,
};

export const characterInformationSlice = createSlice({
  name: "characterInformation",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const { x } = characterInformationSlice.actions;
export default characterInformationSlice.reducer;
