/**
 * Copyright (c) 2022 by Vicente Mundim (https://codepen.io/vicentemundim/pen/nXNvBw)
 */

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

const DEFAULT_DICE_WIDTH = 200;
const DICE_COLORS = ['#1EB414', '#FFD100', '#5BB7A8', '#699ED4', '#687D8B', '#99C34F', '#DA543C', '#E27F2F'];

@Component({
	selector: 'app-dice-20',
	templateUrl: './dice-20.component.html',
	styleUrls: ['./dice-20.component.scss']
})
export class Dice20Component implements OnInit {
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

	@ViewChild('dice') diceElem: ElementRef;

	sides = 20;
	initialSide = 1;
	lastFace: number;
	timeoutId: any;
	transitionDuration = 500;
	animationDuration = 3000;
	currentFace = 8;
	rolling = false;
	rollingClass = '';

	constructor() {
		this.width = this.width == null ? DEFAULT_DICE_WIDTH : this.width;

		const randomColor = Math.floor(Math.random() * DICE_COLORS.length);
		this.color = this.color == null ? DICE_COLORS[randomColor] : this.color;
	}

	public ngOnInit(): void { }

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
