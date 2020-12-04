import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { SuperTabsModule } from "@ionic-super-tabs/angular";
import { AccountPageModule } from "../account/account.module";
import { NewsPageModule } from "../news/news.module";
import { AboutPageModule } from "../about/about.module";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild([
			{
				path: "",
				component: HomePage,
			},
		]),
		SuperTabsModule,
		NewsPageModule,
		AccountPageModule,
		AboutPageModule,
	],
	declarations: [HomePage],
})
export class HomePageModule {}
