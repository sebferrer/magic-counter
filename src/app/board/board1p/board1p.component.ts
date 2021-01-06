import { Component, OnInit } from '@angular/core';
import { ABoardComponent } from '../board.component';
import { PlayerViewModel } from 'src/app/models/player.view.model';

@Component({
	selector: 'app-board1p',
	templateUrl: './board1p.component.html',
	styleUrls: ['./board1p.component.scss']
})
export class Board1PComponent extends ABoardComponent implements OnInit {
	private readonly NB_PLAYERS = 1;
	private readonly defaultColor = 'blue';

	constructor() {
		super();
		this.players = new Array<PlayerViewModel>();
		for (let i = 1; i <= this.NB_PLAYERS; i++) {
			this.players.push(new PlayerViewModel({ id: i, life: 20, color: this.defaultColor }));
		}
	}

	public ngOnInit(): void {

	}

}
