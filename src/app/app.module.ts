import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { PageMainComponent } from './page-main/page-main.component';
import { PageProductFormComponent } from './page-product-form/page-product-form.component';
import { PageProductListComponent } from './page-product-list/page-product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    MainContainerComponent,
    ContentContainerComponent,
    PageMainComponent,
    PageProductFormComponent,
    PageProductListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterOutlet,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
