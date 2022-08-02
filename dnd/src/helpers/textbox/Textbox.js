const Textbox = (props) => {
  return (
    <form action="">
      <input
        placeholder={props.value}
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
