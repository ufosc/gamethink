import * as React from 'react';
import './App.css';
import Text from './components/Text';
import ActionForm from './components/ActionForm';
import Game from './components/Game';

let cleared: boolean = false;

class App extends React.Component {

	render() {
		return (
			<div>
				<Text />;
				<ActionForm />
				<Game />
				<button id="playbutton" onClick={this.clearScreen}>Play</button>
			</div>
		);
	}
	clearScreen() {
		var selectActions = document.getElementsByClassName('actions');
		var selectText = document.getElementsByClassName('Text');
		var selectGame = document.getElementsByClassName('Game');
		if (!cleared) {
			for (let i = 0, il = selectActions.length; i < il; i++) {
				selectActions[i].className += ' hidden';
			}
			selectText[0].className += ' hidden';
			cleared = true;
			selectGame[0].classList.remove('hidden');
		} else {
			for (let i = 0, il = selectActions.length; i < il; i++) {
				selectActions[i].classList.remove('hidden');
			}
			selectText[0].classList.remove('hidden');
			cleared = false;
			selectGame[0].className += ' hidden';
		}
	}
}

export default App;
