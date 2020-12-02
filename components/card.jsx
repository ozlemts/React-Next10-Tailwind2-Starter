import React from 'react';
import { CardItem } from './card-item.jsx';


export const Card = props => (
	<div className='Card grid grid-cols-1 md:grid-cols-5 gap-4 p-4'>
		{props.monsters.map(e => (
			<CardItem key={e.id} monsters={e}></CardItem>
		))}
	</div>
);

export default Card;