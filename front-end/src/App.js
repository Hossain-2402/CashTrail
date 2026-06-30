import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import AddExpense from "./pages/AddExpense.js";
import Visualize from "./pages/Visualize.js";
import PageNotFound from "./pages/pageNotFound.js";



function App() {
  return (
  	<BrowserRouter>
		<div className="body">
			<Routes>
				<Route path="/"	element={<Home/>}> </Route>
				<Route path="/dashboard" element={<Dashboard/>}> </Route>
				<Route path="/dashboard/addExpense" element={<AddExpense/>}> </Route>
				<Route path="/dashboard/visualize" element={<Visualize/>}> </Route>
				<Route path="*" element={<PageNotFound/>}> </Route>
			</Routes>
		</div>
	</BrowserRouter>
  );
}

export default App;
