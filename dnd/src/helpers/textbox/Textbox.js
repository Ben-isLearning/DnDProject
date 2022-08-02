const Textbox = (input = "hello") => {
  let style1 = {
    width: "300px",
  };

  return (
    <div>
      <input
        style={style1}
        id={input}
        type="text"
        required
        minLength="1"
        maxLength="30"
        pattern="[a-zA-Z]"
      />
      <label htmlFor={input}>Textbox</label>
    </div>
  );
};

export default Textbox;
