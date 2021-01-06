import { Component, OnInit } from '@angular/core';
import { ABoardComponent } from '../board.component';
import { PlayerViewModel } from 'src/app/models/player.view.model';

@Component({
	selector: 'app-board3p',
	templateUrl: './board3p.component.html',
	styleUrls: ['./board3p.component.scss']
})
export class Board3PComponent extends ABoardComponent implements OnInit {
	private readonly NB_PLAYERS = 3;
	private readonly defaultColors = new Map<number, string>([
		[1, 'green'],
		[2, 'blue'],
		[3, 'red']
	]);

	constructor() {
		super();
		this.players = new Array<PlayerViewModel>();
		for (let i = 1; i <= this.NB_PLAYERS; i++) {
			this.players.push(new PlayerViewModel({ id: i, life: 20, color: this.defaultColors.get(i) }));
		}
	}

	public ngOnInit(): void {

	}

}
