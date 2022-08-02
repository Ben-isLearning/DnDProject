const Numberbox = (props) => {
  return (
    <div>
      <input
        id={props.input}
        type="number"
        required
        min="1"
        max="99999999999999"
        pattern="[0-9]"
        placeholder={props.input}
      />
      <label htmlFor={props.input}>Numberbox</label>
    </div>
  );
};

export default Numberbox;
