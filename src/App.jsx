import Panel from './Panel/Panel';
import MatrizHorarios2 from './Horario/Horario2';
export default function App() {

	return (
		<div className="flex h-screen bg-gray-100 p-5 gap-5">
			<Panel />
			<div className="flex-1 p-6 overflow-auto">
				<h1 className="text-3xl font-bold mb-4">Horario Académico</h1>
				<MatrizHorarios2 />
			</div>
		</div>
	);
}


/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
	<>
	  <div>
		<a href="https://vite.dev" target="_blank">
		  <img src={viteLogo} className="logo" alt="Vite logo" />
		</a>
		<a href="https://react.dev" target="_blank">
		  <img src={reactLogo} className="logo react" alt="React logo" />
		</a>
	  </div>
	  <h1>Vite + React</h1>
	  <div className="card">
		<button onClick={() => setCount((count) => count + 1)}>
		  count is {count}
		</button>
		<p>
		  Edit <code>src/App.jsx</code> and save to test HMR
		</p>
	  </div>
	  <p className="read-the-docs">
		Click on the Vite and React logos to learn more
	  </p>
	</>
  )
}

export default App


*/

