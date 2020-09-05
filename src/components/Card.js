import React from 'react';
import 'tachyons';

const Card =({name,username,email,id})=>{
	return(
		<div className ='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='pic' src = {`https://robohash.org/${id}`} />
			<h2>{name}</h2>
			<p>{username}</p>
			<p>{email}</p>			
		</div>

	);
}

export default Card;