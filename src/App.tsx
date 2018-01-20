import * as React from 'react';
import './App.css';
import Text from './components/Text';
import ActionBox from './components/ActionBox';
import Action from './scripts/action';

let actionlist: Array<Action> = [new Action('name', 'nMW', 6), new Action('otername', 'yer', 5), 
	new Action('namename', 'pie', 1)];

class App extends React.Component {
	render() {
		return (
			<div>
				<Text />
				<ActionBox actions={actionlist}/>
			</div>
		);
	}
}

export default App;
