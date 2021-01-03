import { Component, OnInit } from '@angular/core';
import { ABoardComponent } from '../board.component';

@Component({
	selector: 'app-board2p',
	templateUrl: './board2p.component.html',
	styleUrls: ['./board2p.component.scss']
})
export class Board2PComponent extends ABoardComponent implements OnInit {

	constructor() {
		super();
	}

	public ngOnInit(): void {

	}

}
