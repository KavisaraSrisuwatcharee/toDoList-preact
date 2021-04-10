import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<div class={style.layout}>
		<div class={style.detail}>
			<h1>Welcome, To-Do Lists</h1>
			
		</div>
		<div class={style.photo}>
		<img src="../assets/photos/Checklist.svg" />
		</div>
		</div>
		
	</div>
);

export default Home;
