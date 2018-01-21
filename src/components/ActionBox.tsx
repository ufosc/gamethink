import * as React from 'react';
import Action from '../scripts/action';

export interface Props {
	actions: Array<Action>;
}

class ActionBox extends React.Component<Props, object> {
	render() {
		return (
			<select className="actions" color="#ffffff">
				{this.props.actions.map(function(action: Action, i: number) {
					return <option key={i}>{action.command}</option>;
				})}
			</select>
		);
	}
}

export default ActionBox;
