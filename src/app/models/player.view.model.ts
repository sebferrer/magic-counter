import { IPlayer } from './player.model';

export class PlayerViewModel {

	public readonly id: number;
	public life: number;
	public color: string;
	public colorPicking: boolean;

	constructor(player: IPlayer) {
		this.id = player.id;
		this.life = player.life;
		this.color = player.color;
		this.colorPicking = false;
	}

}