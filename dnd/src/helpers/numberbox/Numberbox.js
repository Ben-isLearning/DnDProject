const Numberbox = (input) => {
  let style = {
    width: "250px",
  };
  return (
    <div>
      <input
        style={style}
        id={input}
        type="number"
        required
        min="1"
        max="99999999999999"
        pattern="[0-9]"
      />
      <label for={input}>Numberbox</label>
    </div>
  );
};

export default Numberbox;
