import * as React from 'react';

export interface Props {
	rows: number;
	cols: number;
}

class Text extends React.Component {

	render() {
		return (
			<div className="Text">
				<textarea className="write-box" placeholder="Write here" />
			</div>
		);
	}
}

export default Text;
