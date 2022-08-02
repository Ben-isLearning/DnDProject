import Textbox from "../../helpers/textbox/Textbox";
import { useSelector, useDispatch } from "react-redux";
import { selectCharacterInformation } from "./CharacterInformationSlice";

const CharacterInformation = () => {
  const dispatch = useDispatch();
  const characterInformation = useSelector(selectCharacterInformation);
  const characterName = characterInformation.characterName;
  return (
    <div>
      <h1>I like cheese</h1>
      <h1>Character Name: {characterInformation.characterName}</h1>
      <h1>Class: {characterInformation.class}</h1>
      <h1>Experience: {characterInformation.experiencePoints}</h1>
      <h1>Level: {characterInformation.level}</h1>
      <h1>Player: {characterInformation.playerName}</h1>
      <h1>Race: {characterInformation.race}</h1>

      <Textbox
        value={characterInformation.characterName}
        id={characterInformation.characterName}
      ></Textbox>
      <Textbox value={characterInformation.class}></Textbox>
    </div>
  );
};

export default CharacterInformation;
