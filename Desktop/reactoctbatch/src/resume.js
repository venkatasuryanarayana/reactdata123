import React from 'react';
import data from './data.json';

function Resume(props){
	let profile = data.details[props.location.personcard.id];
	console.log(profile);

return(
	<div>
	<h1>{profile.card.name}</h1>
	<h1>{profile.card.email}</h1>

	<table border="1">
	<th>
	<td>{profile.card.name}</td>
	<td>{profile.card.mobile}</td>

	</th>


	</table>

	</div>


	)
}

export default Resume;