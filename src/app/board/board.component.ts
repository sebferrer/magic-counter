import { Component, OnInit } from '@angular/core';
import { Dice20Component } from '../dice/d20';
import { PlayerViewModel } from '../models/player.view.model';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.scss']
})
export class ABoardComponent implements OnInit {
	public players: PlayerViewModel[];
	public displayMenu: boolean;
	public displayDices: boolean;
	public displayDiceMenus: boolean;

	constructor() {
		this.displayMenu = true;
		this.displayDices = false;
		this.displayDiceMenus = false;
	}

	public ngOnInit(): void { }

	public getPlayer(id: number): PlayerViewModel {
		return this.players.find(player => player.id === id) || null;
	}

	public displayPlayerLifeDice(id: number): boolean {
		return this.getPlayer(id).diceCounter && this.getPlayer(id).isLifeBetweenZeroTwenty();
	}

	public updateLife(id: number, life: number): void {
		this.getPlayer(id).life += life;
		if (this.displayPlayerLifeDice(id)) {
			this.getPlayer(id).lifeDice.rollTo(this.getPlayer(id).life);
		} 
	}

	public reset(): void {
		for (const player of this.players) {
			player.life = 20;
		}
	}

	public getColor(playerId: number): string {
		return this.players.find(player => player.id === playerId).color;
	}

	public toggleDiceMenus(): void {
		this.displayDiceMenus = this.displayDiceMenus === false ? true : false;
	}

}
