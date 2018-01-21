import * as React from 'react';
import NotJson from '../scripts/NotJson';

export interface Props {
	id: number;
	level: number;
}

class Scene extends React.Component<Props, object> {
	render() {
		console.log(NotJson.exampleJson);
		return (
			<div className="Scene">
				<header>
					<h1>Welcome to Scene {this.props.id}</h1>
				</header>
			</div>
		);
	}
}

export default Scene;
