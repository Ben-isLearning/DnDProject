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
        minlength="1"
        maxlength="30"
        pattern="[a-zA-Z]"
      />
      <label for={input}>Textbox</label>
    </div>
  );
};

export default Textbox;
