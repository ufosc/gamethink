import * as React from 'react';
// var fs = require('fs');
// import fs = require('fs');
// import * as fs from 'fs';
var jsonfile = require('jsonfile');
// var values: string;

export interface Props {
	id: number;
	level: number;
	jsonLocation: string;
}

// Handle the data 
/* var handleJsonFile = function (err: object, data: object) {
	if (err) {
		throw err;
	}
	values = JSON.parse(data);
}; */

class Scene extends React.Component<Props, object> {
	constructor(props: Props) {
		super(props);
		// The level starts at 0 for the root scene, else-wise it's set by 
		// this.state = {level: (this.props.id === 0 ? 0 : -1)};

		// Read the file, and pass it to your callback
/* 		fs.readFileSync(this.props.jsonLocation);
		this.state = {value: JSON.parse(values)}; */
	}

	render() {
		// console.log(this.state.value);
		jsonfile.readFile(this.props.jsonLocation, function(err: Error, obj: string) {
			console.dir(obj);
		});
		
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
