/**
 * Copyright (c) 2022 by Vicente Mundim (https://codepen.io/vicentemundim/pen/nXNvBw)
 */

import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PlayerViewModel } from 'src/app/models/player.view.model';

const DEFAULT_DICE_WIDTH = 200;
const DICE_COLORS = ['#1EB414', '#FFD100', '#5BB7A8', '#699ED4', '#687D8B', '#99C34F', '#DA543C', '#E27F2F'];
const CLASSIC_FACES_MAP = new Map([[1, 1], [2, 7], [3, 17], [4, 3], [5, 19], [6, 13], [7, 15], [8, 10], [9, 16], [10, 9],
[11, 12], [12, 5], [13, 11], [14, 6], [15, 8], [16, 2], [17, 18], [18, 4], [19, 14], [20, 20]]);
const SORTED_FACES_MAP = new Map([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10],
[11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16], [17, 17], [18, 18], [19, 19], [20, 20]]);

@Component({
	selector: 'app-dice-20',
	templateUrl: './dice-20.component.html',
	styleUrls: ['./dice-20.component.scss']
})
export class Dice20Component implements OnInit, AfterViewInit {
	@Input()
	top: number; // %
	@Input()
	left: number; // %
	@Input()
	width: number; // px
	@Input()
	rotate: number; // deg
	@Input()
	color: string; // deg
	@Input()
	type: string;
	@Input()
	player: PlayerViewModel;

	@ViewChild('dice') diceElem: ElementRef;

	sides = 20;
	initialSide = 1;
	lastFace: number;
	timeoutId: any;
	transitionDuration = 500;
	animationDuration = 3000;
	currentFace = 1;
	rolling = false;
	rollingClass = '';

	facesMap: Map<number, number>;

	constructor() { }

	public ngOnInit(): void {
		this.width = this.width == null ? DEFAULT_DICE_WIDTH : this.width;

		const randomColor = Math.floor(Math.random() * DICE_COLORS.length);
		this.color = this.color == null ? DICE_COLORS[randomColor] : this.color;

		switch (this.type) {
			case 'life':
				this.facesMap = SORTED_FACES_MAP;
				if (this.player != null) {
					this.player.lifeDice = this;
				}
				break;
			default:
				this.facesMap = CLASSIC_FACES_MAP;
				break;
		}
		console.log(this.facesMap);
	}

	public ngAfterViewInit(): void {
		switch (this.type) {
			case 'life':
				if (this.player != null) {
					this.rollTo(this.player.life);
					break;
				}
		}
	}

	randomFace(): number {
		var face = Math.floor((Math.random() * this.sides)) + this.initialSide
		this.lastFace = face == this.lastFace ? this.randomFace() : face
		return face;
	}

	rollTo(face: number): void {
		clearTimeout(this.timeoutId)

		this.currentFace = face;
		this.diceElem.nativeElement.setAttribute('data-face', this.currentFace);
	}

	reset(): void {
		this.currentFace = null;
		this.diceElem.nativeElement.setAttribute('data-face', this.currentFace);
	}

	// They see me rollin'
	// They hatin'
	roll(): boolean {
		if (this.type == 'life') {
			return;
		}
		if (!this.rolling) {
			this.rolling = true;
			this.rollingClass = 'rolling';
			clearTimeout(this.timeoutId)

			const self = this;
			this.timeoutId = setTimeout(function () {
				self.rolling = false;
				self.rollingClass = '';
				self.rollTo(self.randomFace())
			}, this.animationDuration)
		}
		return false
	}

}
