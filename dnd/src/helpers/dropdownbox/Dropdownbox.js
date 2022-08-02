const Dropdownbox = (input) => {
  return (
    <form action="#">
      <select name={input} id={input}>
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="golang">Golang</option>
        <option value="python">Python</option>
        <option value="c#">C#</option>
        <option value="C++">C++</option>
        <option value="erlang">Erlang</option>
      </select>
      <input type="submit" value="Submit" />
      <label htmlFor={input}>Language</label>
    </form>
  );
};

export default Dropdownbox;
