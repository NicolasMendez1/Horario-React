import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MatrizHorarios2 from './Horario/Horario2.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App></App>
	</StrictMode>,
)


