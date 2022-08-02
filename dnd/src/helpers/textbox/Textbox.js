import CharacterInformation from "../../features/CharacterInformation/CharacterInformation";

const Textbox = () => {
  return (
    <form action="">
      <input
        placeholder="abc"
        id="wow"
        type="text"
        required
        minLength="1"
        maxLength="30"
        pattern="[a-z|A-Z]"
      />
      <label htmlFor="wow">Value</label>
    </form>
  );
};

export default Textbox;
