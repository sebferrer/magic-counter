import { Component, OnInit, Input } from '@angular/core';
import { ABoardComponent } from '../../board/board.component';
import { PlayerViewModel } from '../../models/player.view.model';

@Component({
	selector: 'app-dice-menu',
	templateUrl: './dice-menu.component.html',
	styleUrls: ['./dice-menu.component.scss']
})
export class DiceMenuComponent implements OnInit {
	@Input()
	board: ABoardComponent;
	@Input()
	player: PlayerViewModel;
	@Input()
	top: number; // %
	@Input()
	left: number; // %
	@Input()
	width: number; // rem
	@Input()
	space: number; // %
	@Input ()
	rotate: number;

	constructor() {
		this.width = this.width == null ? 3.5 : this.width;
		this.space = this.space == null ? 9 : this.space;
		this.rotate = this.rotate == null ? 0 : this.rotate;
	}

	public ngOnInit(): void { }

	public toggle(): void {
		if (!this.player.diceCounter) {
			this.player.diceCounter = true;
		} else {
			this.player.diceCounter = false;
		}
	}

}
