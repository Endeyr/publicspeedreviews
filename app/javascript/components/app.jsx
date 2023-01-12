import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewInternetSpeed from './new_internet_speed'
import PlacesList from './places_list'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/new-internet-speed"
					element={<NewInternetSpeed />}
				></Route>
				<Route path="*" element={<PlacesList />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
