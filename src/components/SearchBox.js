import React from 'react';
import 'tachyons';

const SearchBox = ({searchfield,searchChange})=>{
	return(
		<div>
			<input 
			className='pa3 ba b--green bg-light-blue'
			type='search' 
			placeholder="Enter the robo name"
			onChange ={searchChange}/>
		</div>
		);
}

export default SearchBox;