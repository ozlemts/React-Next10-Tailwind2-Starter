import React from 'react';
import { CardItem } from './card-item.js';


export const Card = props => (
	<div className='Card grid grid-cols-1 md:grid-cols-5 gap-4 bg-red-400 min-h-screen p-10'>
		{props.monsters.map(e => (
			<CardItem key={e.id} monsters={e}></CardItem>
		))}
	</div>
);

export default Card;