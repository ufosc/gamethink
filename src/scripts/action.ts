
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

export default Action;