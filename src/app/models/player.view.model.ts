import { Dice20Component } from '../dice/d20';
import { IPlayer } from './player.model';

export class PlayerViewModel {

	public readonly id: number;
	public life: number;
	public color: string;
	public colorPicking: boolean;
	public diceCounter: boolean;
	public lifeDice: Dice20Component;

	constructor(player: IPlayer) {
		this.id = player.id;
		this.life = player.life;
		this.color = player.color;
		this.colorPicking = false;
		this.diceCounter = false;
		this.lifeDice = null;
	}

	public isLifeBetweenZeroTwenty(): boolean {
		return this.life > 0 && this.life < 21;
	}

}