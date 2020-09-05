import React,{Component} from 'react';
import CardList from '../components/CardList'
import 'tachyons';
import SearchBox from '../components/SearchBox'
//import Scroll from './Scroll'
import {robots} from './robots'



class App extends Component{
	constructor(){
		super()
			this.state ={
		    robots: robots,
		    searchfield:''	
	}

}

 // componentDidMount() {
 // 	fetch('https://jsonplaceholder.typicode.com/users')
	//  	.then(respose=>{return respose.json()})
	//  	.then(users=>{this.setState({robots:users});
 // 	});
 	
 //}

 onSearchChange =(event)=>{

 	this.setState({searchfield:event.target.value})
	
	}

	

	render(){
		const filteredRobots = this.state.robots.filter(robots1=>{
		return robots1.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
});
		return (
		<div className='tc'>
			<h2> Sharma Robos</h2>
			<SearchBox  searchChange={this.onSearchChange} />
			<CardList robots={filteredRobots}/>			
		</div>
	);
	}
}


export default App;