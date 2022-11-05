import { Component, OnInit, Input } from '@angular/core';
import { ABoardComponent } from '../board/board.component';

@Component({
	selector: 'app-board-menu',
	templateUrl: './board-menu.component.html',
	styleUrls: ['./board-menu.component.scss']
})
export class BoardMenuComponent implements OnInit {
	@Input()
	board: ABoardComponent;
	@Input()
	type: string;

	constructor() { }

	public ngOnInit(): void { }

	public menu(): void {
		if (this.board.displayDices) {
			this.hideDices();
		}
		this.board.toggleDiceMenus();
	}

	public menuLeave(): void {
		this.board.displayDiceMenus = false;
	}

	public reset(): void {
		this.board.reset();
	}

	public openColorMenu(): void {
		for (const player of this.board.players) {
			player.colorPicking = true;
		}
	}

	public displayDices(): void {
		for(let i = 1; i <= this.board.players.length; i++) {
			if (this.board.displayPlayerLifeDice(i)) {
				return;
			}
		}
		this.board.displayDices = true;
	}

	public hideDices(): void {
		this.board.displayDices = false;
	}

}
