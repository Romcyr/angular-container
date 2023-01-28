import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ContentContainerComponent } from './content-container/content-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    MainContainerComponent,
    ContentContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
