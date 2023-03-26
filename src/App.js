import "./styles.css";

export default function App() {
  var result;
  var value;
  function changeValue() {
    if (value == "constant" && result == "true") {
      result = true;
    }
    if (value == "argument" && result == "false") {
      result = false;
    }
    if (value == "and" && result == "true") {
      result = true;
    }
    if (value == "or" && result == "false") {
      result = false;
    }
    result = false;
  }
  return (
    <>
      <div className="Aapp">
        <input type="text" />
        <select>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <button onClick={changeValue} type="submit">
        ADD args
      </button>

      <div>
        <select>
          <option value="select">select....</option>
          <option value="constant">constant</option>
          <option value="argument">argument</option>
          <option value="and">and</option>
          <option value="or">or</option>
        </select>
      </div>
      <div>
        <h1>{result}</h1>
      </div>
    </>
  );
}
