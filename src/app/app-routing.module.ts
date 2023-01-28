import {RouterModule, Routes} from "@angular/router";
import {MainContainerComponent} from "../main-container/main-container.component";
import {ContentContainerComponent} from "../content-container/content-container.component";
import {NavigatorComponent} from "./navigator.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: "", redirectTo: "Main Page", pathMatch: "full"},
  {path: "Main Page", component: MainContainerComponent},
  {path: "Product list", component: ContentContainerComponent},
  {path: "Product form", component: NavigatorComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
