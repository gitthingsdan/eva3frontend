/* *** IMPORTANTE *** */
// Para acceder al repositorio de GitHub de esta app: https://github.com/gitthingsdan/eva3frontend/tree/main
// Para acceder a una versión en línea de esta app: https://gitthingsdan.github.io/eva3frontend
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PostItSim } from './components/PostItSim'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<PostItSim />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
