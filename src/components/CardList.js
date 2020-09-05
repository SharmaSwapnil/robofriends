import React from 'react';
import Card from './Card';




const CardList=({robots})=>{

	const cardArray = robots.map((user,i)=>{
		return(
				<Card key ={i} 
				name ={robots[i].name} 
				username={robots[i].username} 
				email ={robots[i].email} 
				id= {robots[i].id}/>
	          );
        });

	
	return(
		<div>	
		{cardArray}	
		</div>
	);
}


export default CardList;