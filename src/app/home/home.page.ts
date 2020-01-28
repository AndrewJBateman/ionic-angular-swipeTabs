import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NewsPage } from '../news/news.page';
import { AccountPage } from '../account/account.page';
import { AboutPage } from '../about/about.page';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  newsPage = NewsPage;
  accountPage = AccountPage;
  aboutPage = AboutPage;
  
  canGoBack=false;
  title="News";

  @ViewChild('newsNav', {static: false}) newsNav: IonNav;
  
  constructor() {}

  ngAfterViewInit() {
    this.newsNav.ionNavDidChange.subscribe(async (event: any) => {
      console.log('Change: ', event)
      this.canGoBack = await this.newsNav.canGoBack();
      console.log('this.canGoBack boolean state: ', this.canGoBack)
    });
  }

  goBack() {
    this.newsNav.pop();
  }

  onTabChange(ev: any) {
    switch (ev.detail.index) {
      case 0:
        this.title = 'News';
        break;
      case 1:
        this.title = 'Account';
        break;
      case 2:
        this.title = 'About';
        break;
    }
  }

}
