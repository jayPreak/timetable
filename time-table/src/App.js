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
		<thead>
			<tr>
				<th>Date</th>
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
		)
		})}
	</table>
	</div>
);
}

export default App;
