const Textbox = (props) => {
  return (
    <form action="">
      <input
        placeholder={props.value}
        id={props.id}
        type="text"
        required
        minLength="1"
        maxLength="30"
      />
      <label htmlFor={props.id}>Value</label>
    </form>
  );
};

export default Textbox;
