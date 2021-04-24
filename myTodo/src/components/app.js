import { h } from 'preact';
import { Router } from 'preact-router';


// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import ToDo from '../routes/ToDo';
const App = () => (
	<div id="app">
		<Router>
			<Home path="/" />
			<ToDo path="/todo"/>
		</Router>
	</div>
)

export default App;
