import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Store } from "@reduxjs/toolkit";

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

//Action Generators

export const setCharName = (name) => {
  return { type: "characterInformation/updateCharacterName", payload: name };
};

//Exports

export const selectCharacterInformation = (state) => state.characterInformation;

export const { updateCharacterName } = characterInformationSlice.actions;
export default characterInformationSlice.reducer;
