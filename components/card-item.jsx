import React from 'react';

export const CardItem = ({monsters}) => (
	<div className='card-item flex flex-col justify-center items-center  bg-white rounded hover:bg-red-100 p-4'>
		<img alt="cat"  className="h-24 my-4" src={`https://robohash.org/${monsters.id}?set=set4`}/>
		<p className="font-bold text-xl my-4">{monsters.name}</p>
		<p className="text-lg my-2">{monsters.email}</p>
	</div>
);
