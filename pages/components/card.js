import React from 'react';
import Index from "../index";


export const Card = props => (
	<div className='card'>
		{props.monsters.map(e => (
			<h1 key={e.id}> {e.name}</h1>
		))}
	</div>
);

export default Card;