import { IPlayer } from './player.model';

export class PlayerViewModel {

	public readonly id: number;
	public life: number;

	constructor(player: IPlayer) {
		this.id = player.id;
		this.life = player.life;
	}

}