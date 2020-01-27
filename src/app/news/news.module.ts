import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPage } from './news.page';
import { NewsDetailsPageModule } from '../news-details/news-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsDetailsPageModule
  ],
  declarations: [NewsPage],
  entryComponents: [NewsPage]
})
export class NewsPageModule {}
