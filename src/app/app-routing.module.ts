import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { Board2PComponent } from './board/board2p';
import { Board4PComponent } from './board/board4p';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'board2p',
		component: Board2PComponent
	},
	{
		path: 'board4p',
		component: Board4PComponent
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
