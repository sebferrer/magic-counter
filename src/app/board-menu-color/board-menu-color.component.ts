import { Component, OnInit, Input } from '@angular/core';
import { ABoardComponent } from '../board/board.component';
import { PlayerViewModel } from '../models/player.view.model';

@Component({
	selector: 'app-board-menu-color',
	templateUrl: './board-menu-color.component.html',
	styleUrls: ['./board-menu-color.component.scss']
})
export class BoardMenuColorComponent implements OnInit {
	@Input()
	board: ABoardComponent;
	@Input()
	player: PlayerViewModel;
	@Input()
	top: number; // %
	@Input()
	left: number; // %
	@Input()
	selectorWidth: number; // rem
	@Input()
	manaWidth: number; // rem
	@Input ()
	rotate: number;

	constructor() {
		this.rotate = this.rotate == null ? 0 : this.rotate;
	}

	public ngOnInit(): void { }

	public reset(): void {
		this.board.reset();
	}

	public closeColorMenu(): void {
		this.player.colorPicking = false;
	}

	public changeColor(color: string): void {
		this.player.color = color;
		this.closeColorMenu();
	}

}
