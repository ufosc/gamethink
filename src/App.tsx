import * as React from 'react';
import './App.css';
import Text from './components/Text';
import ActionForm from './components/ActionForm';

class App extends React.Component {
	render() {
		return (
			<div>
				<Text />
				<ActionForm />
			</div>
		);
	}
}

export default App;
