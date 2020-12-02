import React from 'react';

export const CardItem = (props) => (
	<div className='card-item flex flex-col justify-center items-center  bg-white rounded hover:bg-red-100 p-4'>
		<img alt="cat"  className="h-24 my-4" src={`https://robohash.org/${props.monsters.id}?set=set4`}/>
		<p className="font-bold text-xl my-4">{props.monsters.name}</p>
		<p className="text-lg my-2">{props.monsters.email}</p>
	</div>
);

export default CardItem;