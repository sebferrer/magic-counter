import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home';
import { ABoardComponent } from './board';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BoardMenuComponent } from './board-menu';
import { BoardMenuColorComponent } from './board-menu-color';
import { Board1PComponent } from './board/board1p';
import { Board2PComponent } from './board/board2p';
import { Board3PComponent } from './board/board3p';
import { Board4PComponent } from './board/board4p';
import { Dice20Component } from './dice/d20';
import { DiceMenuComponent } from './dice/dice-menu';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		BoardMenuComponent,
		BoardMenuColorComponent,
		DiceMenuComponent,
		Dice20Component,
		ABoardComponent,
		Board1PComponent,
		Board2PComponent,
		Board3PComponent,
		Board4PComponent
	],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		BrowserAnimationsModule,
		MatListModule,
		MatButtonModule,
		MatIconModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
