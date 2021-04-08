import { h,Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import FaPlus from 'preact-icons/fa/plus'
const Header = () => (
	<header class={style.header}>
		<h2>ToDoList</h2>
		<div>
			<FaPlus/>
		</div>
		{/* <nav>
			<Link activeClassName={style.active} href="/">add</Link>
			
		</nav> */}
	</header>
);

export default Header;
