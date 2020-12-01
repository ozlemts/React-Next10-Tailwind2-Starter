import React from 'react';

export const CardItem = (props) => (
	<div className='card-item flex flex-col justify-center items-center h-48 bg-white rounded hover:bg-red-100'>
		<img alt="cat"  className="h-36" src={`https://robohash.org/${props.monsters.id}?set=set4`}></img>
		<h1>{props.monsters.name}</h1>
	</div>
);