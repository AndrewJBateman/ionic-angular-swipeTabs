import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AccountPage } from "./account.page";

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule],
    declarations: [AccountPage]
})
export class AccountPageModule {}
