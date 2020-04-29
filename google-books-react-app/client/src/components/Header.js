import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Header() {
	return (
		<div>
			<div className='jumbotron jumbotron-fluid'>
				<div className='container'>
					<h1 className='nav'>Google Books Search</h1>
					<p className='lead'>Search and save your favorite books!</p>
				</div>
			</div>
			<nav className='nav nav-pills flex-column flex-sm-row'>
				<a className='flex-sm-fill text-sm-center nav-link' href='/'>
					Search Books
				</a>
				<a className='flex-sm-fill text-sm-center nav-link' href='/saved'>
					Saved Books
				</a>
			</nav>
		</div>
	);
}

export default Header;
