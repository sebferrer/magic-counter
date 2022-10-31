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
	}

	public reset(): void {
		this.board.reset();
	}

	public openColorMenu() {
		for (const player of this.board.players) {
			player.colorPicking = true;
		}
	}

	public displayDices() {
		this.board.displayDices = true;
	}

	public hideDices() {
		this.board.displayDices = false;
	}

}
