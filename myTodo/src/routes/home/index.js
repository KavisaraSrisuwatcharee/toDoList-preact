import { h } from 'preact';
import { route } from 'preact-router';
route('url');
import style from './style.css';
import toDo from '../ToDo';
const Home = () => {
	
	const goTodo = () => {
		route("/todo");
	}
	return (
	<div class={style.home}>
		<div class={style.layout}>
		<div class={style.detail}>
			<h1>Welcome, To-Do Lists</h1>
			<p>Prioritized lists of all the things</p>
			<p>you must do.</p>
			<button onClick={goTodo}>Get Started!!!</button>
		</div>
		<div class={style.photo}>
		<img src="../assets/photos/Checklist.svg" />
		</div>
		</div>
		
	</div>
	
)};

export default Home;
