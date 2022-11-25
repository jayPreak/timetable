import './App.css';

// Example of a data array that
// you might receive from an API
const data = [
{ name: "28 Nov Mon", age: "SE"},
{ name: "30 Nov Wed", age: "DAA"},
{ name: "2 Dec Fri", age: "FDS"},
{ name: "3 Dec Sat", age: "OE"},
{ name: "5 Dec Mon", age: "PE"},
{ name: "7 Dec Wed", age: "CN"},
]

function App() {
return (
	<div className="App">
	<table>
		<tr>
		<th>Date</th>
		<th>Exam</th>
		{/* <th>Gender</th> */}
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.age}</td>
			{/* <td>{val.gender}</td> */}
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default App;
