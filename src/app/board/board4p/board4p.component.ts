import { Component, OnInit } from '@angular/core';
import { ABoardComponent } from '../board.component';
import { PlayerViewModel } from 'src/app/models/player.view.model';

@Component({
	selector: 'app-board4p',
	templateUrl: './board4p.component.html',
	styleUrls: ['./board4p.component.scss']
})
export class Board4PComponent extends ABoardComponent implements OnInit {
	private readonly NB_PLAYERS = 4;
	private readonly defaultColors = new Map<number, string>([
		[1, 'blue'],
		[2, 'green'],
		[3, 'black'],
		[4, 'white']
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
