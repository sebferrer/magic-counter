import { Component, OnInit } from '@angular/core';
import { PlayerViewModel } from '../models/player.view.model';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.scss']
})
export class ABoardComponent implements OnInit {
	public players: PlayerViewModel[];

	constructor() { }

	public ngOnInit(): void {

	}

	public getPlayer(id: number): PlayerViewModel {
		return this.players.find(player => player.id === id) || null;
	}

	public updateLife(id: number, life: number) {
		this.getPlayer(id).life += life;
	}

	public reset() {
		for(const player of this.players) {
			player.life = 20;
		}
	}

}
