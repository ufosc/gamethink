import * as React from 'react';
import Action from '../scripts/action';
import ActionBox from './ActionBox';

let actionlist: Array<Action> = [new Action('name', 'nMW', 6), new Action('otername', 'yer', 5), 
	new Action('namename', 'pie', 1)];

class ActionForm extends React.Component<{}, {msgValue: string, comValue: string, nidValue: string }> {

	// tslint:disable-next-line:no-any
	constructor(props: any) {
		super(props);
		this.state = {msgValue: '', comValue: '', nidValue: ''};

		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleCommandChange = this.handleCommandChange.bind(this);
		this.handleNextIDChange = this.handleNextIDChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// tslint:disable-next-line:no-any
	handleMessageChange(event: any) {
		this.setState({msgValue: event.target.value});
	}
	
	// tslint:disable-next-line:no-any
	handleCommandChange(event: any) {
		this.setState({comValue: event.target.value});
	}
	// tslint:disable-next-line:no-any
	handleNextIDChange(event: any) {
		this.setState({nidValue: event.target.value});
	}

	// tslint:disable-next-line:no-any
	handleSubmit(event: any) {
		event.preventDefault();
		let msg: string = document.getElementsByName('newMessage').item.toString();
		let com: string = document.getElementsByName('newCommand').item.toString();
		// tslint:disable-next-line:radix
		let nid: number = parseInt(document.getElementsByName('newNextID').item.toString());
		let newAction = new Action(msg, com, nid);
		actionlist.push(newAction);

		alert('New action created');
		
	}

	render() {
		return (
			<div>
			<ActionBox actions={actionlist}/>
			<form onSubmit={this.handleSubmit}>
				<label>
					New Action Message:
					<input name="newMessage" type="text" value={this.state.msgValue} onChange={this.handleMessageChange} />
				</label>
				<br />
				<label>
					New Action Command:
					<input name="newCommand" type="text" value={this.state.comValue} onChange={this.handleCommandChange} />
				</label>
				<br />
				<label>
					Next Scene ID:
					<input name="newNextID" type="text" value={this.state.nidValue} onChange={this.handleNextIDChange} />
				</label>
				<br />
				<input type="submit" value="Create New Action" />
			</form>
			</div>
		);
	}
}

export default ActionForm;
