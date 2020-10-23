import React,{Component} from 'react';

// function Surya(props){
// 	return(
// 		<h2>{props.name} Role is : {props.role}</h2>

// 		);
// }

// class Surya extends React.Component{
// 	render(){
// 		return(
// 			<h2>{this.props.name} Role is : {this.props.role}</h2>


// 			);
// 	}
// }

class Surya extends Component{

	constructor(){
		super();
		this.state={
			// name:"surya",
			// bestfriend:"me"
			count:0
		}
	}

	changeState=()=>{
		this.setState({
			// name:"venkat",
			// bestfriend:"Narla"
			count:this.state.count+1
		})
	}

	render(){
		return(
			<div>
			<h2>{this.state.count}</h2>
			<button onClick={this.changeState}>Click me</button>


			</div>

			);
	}

}

export default Surya;