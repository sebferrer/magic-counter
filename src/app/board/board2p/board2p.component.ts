import { Component, OnInit } from '@angular/core';
import { ABoardComponent } from '../board.component';
import { PlayerViewModel } from 'src/app/models/player.view.model';

@Component({
	selector: 'app-board2p',
	templateUrl: './board2p.component.html',
	styleUrls: ['./board2p.component.scss']
})
export class Board2PComponent extends ABoardComponent implements OnInit {
	private readonly NB_PLAYERS = 2;
	private readonly colors = new Map<number, string>([
		[1, 'blue'],
		[2, 'red']
	]);

	constructor() {
		super();
		this.players = new Array<PlayerViewModel>();
		for (let i = 1; i <= this.NB_PLAYERS; i++) {
			this.players.push(new PlayerViewModel({ id: i, life: 20, color: this.colors.get(i) }));
		}
	}

	public ngOnInit(): void {

	}

}
