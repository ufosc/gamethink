import Scene from './Scene';

interface GameData {
	scene: Scene[];
}

export class NotJson {
	
	// Main data to use when not displaying the example info
	static mainJson: GameData; 

	// Example data
	static exampleJson = {
		'scene': [
			{
				'id': 0,
				'row': 0,
				'text': 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first',
				'action': [
					{
						'message': 'You play the next movie.',
						'idNext': 1,
						'commands': 'play next'
					},
					{
					'message': 'There is no previous movie.',
					'idNext': 0,
					'commands': 'play previous'
					}
				]
			},
			{
				'id': 1,
				'row': 1,
				'text': 'It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops',
				'action': [
					{
						'message': 'You play the next movie',
						'idNext': 2,
						'commands': 'play next'
					},
					{
						'message': 'You play the previous movie',
						'idNext': 0,
						'commands': 'play previous'
					}
				]
			},
			{
				'id': 2,
				'row': 2,
				'text': 'Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend',
				'actions': [
					{
						'message': 'There is no next movie',
						'idNext': 2,
						'commands': 'play next'
					},
					{
						'message': 'You play the previous movie',
						'idNext': 1,
						'commands': 'play previous'
					}
				]
			}
		]
	};
}

export default NotJson;