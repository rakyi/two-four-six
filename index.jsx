"use strict";

function followsTheRule(entryOne, entryTwo, entryThree) {
  return entryOne > 0 && entryTwo > 0 && entryThree > 0;
}

function App() {
  const [entryOne, setEntryOne] = React.useState("");
  const [entryTwo, setEntryTwo] = React.useState("");
  const [entryThree, setEntryThree] = React.useState("");
  const [triads, setTriads] = React.useState([
    {
      entryOne: 2,
      entryTwo: 4,
      entryThree: 6,
      isValid: true,
    },
  ]);

  function submit(event) {
    event.preventDefault();
    validate();
    setTriads(
      triads.concat({
        entryOne,
        entryTwo,
        entryThree,
        isValid: followsTheRule(entryOne, entryTwo, entryThree),
      })
    );
  }

  function validate() {}

  return (
    <main className="container">
      <h1 className="mt-5">Two Four Six</h1>
      <div className="row">
        <div className="col">
          <form onSubmit={submit}>
            <div className="row">
              <div className="col">
                <input
                  type="number"
                  value={entryOne}
                  onChange={(e) => setEntryOne(e.target.value)}
                  className="form-control"
                ></input>
              </div>

              <div className="col">
                <input
                  type="number"
                  value={entryTwo}
                  onChange={(e) => setEntryTwo(e.target.value)}
                  className="form-control"
                ></input>
              </div>

              <div className="col">
                <input
                  type="number"
                  value={entryThree}
                  onChange={(e) => setEntryThree(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>

            <button className="btn btn-primary mt-3" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="col">
          <ul>
            {triads.map((triad, index) => (
              <li key={index}>
                {triad.entryOne} {triad.entryTwo} {triad.entryThree} ={" "}
                {triad.isValid ? "Fits" : "Does not fit"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(<App></App>);
