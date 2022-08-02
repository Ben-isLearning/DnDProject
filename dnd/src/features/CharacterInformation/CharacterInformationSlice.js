import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { store } from "../../app/store";

const initialState = {
  characterName: "Dickins",
  class: "ween",
  level: 12,
  race: "defaultRobot",
  alignment: "trueNeutralOfc",
  background: "backgroundHere",
  playerName: "playerName",
  experiencePoints: 111,
};

//Slice Object
export const characterInformationSlice = createSlice({
  name: "characterInformation",
  initialState,
  reducers: {},
  extraReducers: {},
});

//Actions

//Exports

export const selectCharacterInformation = (state) => state.characterInformation;
export const selectClass = (state) => initialState.class;

export const {} = characterInformationSlice.actions;
export default characterInformationSlice.reducer;
