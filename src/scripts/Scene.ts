import Action from './action';

interface SceneData {
	id: number;
	row: number;
	text: string;
	action: Action[];
}

export class Scene implements SceneData {
	constructor(public id: number, public row: number, public text: string, public action: Action[]) {}
}

export default Scene;