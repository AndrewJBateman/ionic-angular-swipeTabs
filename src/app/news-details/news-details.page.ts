import { Component, OnInit } from "@angular/core";
import { IonNav } from "@ionic/angular";

@Component({
	selector: "app-news-details",
	templateUrl: "./news-details.page.html",
	styleUrls: ["./news-details.page.scss"],
})
export class NewsDetailsPage implements OnInit {
	constructor(private nav: IonNav) {}

	ngOnInit() {}

	goBack() {
		this.nav.pop();
	}
}
