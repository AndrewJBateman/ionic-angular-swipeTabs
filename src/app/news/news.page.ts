import { Component, OnInit } from "@angular/core";
import { NewsDetailsPage } from "../news-details/news-details.page";
import { IonNav } from "@ionic/angular";
import { SuperTabs } from "@ionic-super-tabs/angular";

@Component({
	selector: "app-news",
	templateUrl: "./news.page.html",
	styleUrls: ["./news.page.scss"],
})
export class NewsPage implements OnInit {
	newsDetail = NewsDetailsPage;

	constructor(private nav: IonNav, private st: SuperTabs) {}

	ngOnInit() {}

	openDetails() {
		this.nav.push(this.newsDetail);
	}

	openAboutTab() {
		this.st.selectTab(2);
	}
}
