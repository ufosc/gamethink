
export class Action {
	message: string;
	command: string;
	idNext: number;

	constructor(message: string, command: string, idNext: number) {
		this.message = message;
		this.command = command;
		this.idNext = idNext;
	}
}

export class ActionList {
	list: Array<Action>;

	constructor(l: Array<Action>) {
		this.list = l;
	}
}

export default Action;