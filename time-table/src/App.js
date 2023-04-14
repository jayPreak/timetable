import "./App.css";

// Example of a data array that
// you might receive from an API
const data = [
  { name: "25 Apr Tue", age: "AI" },
  { name: "27 Apr Thu", age: "PE" },
  { name: "28 Apr Fri", age: "OM" },
  { name: "1 May Mon", age: "OE" },
  { name: "3 May Wed", age: "Automata" },
  { name: "5 May Fri", age: "Crypto" },
];

function App() {
  return (
    <div className="App">
      {/* <h1></h1> */}
      <table>
        <thead>
          <tr>
            <th>
              Date &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1:30pm -3:30pm
            </th>
            <th>Exam</th>
            {/* <th>Gender</th> */}
          </tr>
        </thead>
        {data.map((val, key) => {
          return (
            <tbody>
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                {/* <td>{val.gender}</td> */}
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
