import React from 'react';

function Head(props) {
	return(
		<div>
		<h1>This is head part {props.name}</h1>
		{props.children};

		</div>

		);
}

export default Head;