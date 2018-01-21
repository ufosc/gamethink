import * as React from 'react';
import NotJson from '../scripts/NotJson';

interface Prop {

}

export class Game extends React.Component<Prop, {inputValue: string}> {
	constructor(props: Prop) {
		super(props);
		this.state = {inputValue: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);		
	}

	// tslint:disable-next-line:no-any
	handleChange(event: any) {
		this.setState({inputValue: event.target.inputValue});
	}

	// tslint:disable-next-line:no-any
	handleSubmit(event: any) {
		console.log(this.state.inputValue);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="Game hidden">
				<div className="outputbox">{NotJson.exampleJson.scene[0].text}</div>
				<input 
					value={this.state.inputValue} 
					type="text" 
					className="userinput" 
					placeholder="Enter here" 
					onChange={this.handleChange}
				/>
			</form>
		);
	}
}

export default Game;