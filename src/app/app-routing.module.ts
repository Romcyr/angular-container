import {RouterModule, Routes} from "@angular/router";
import {MainContainerComponent} from "./main-container/main-container.component";
import {ContentContainerComponent} from "./content-container/content-container.component";
import {NavigatorComponent} from "./navigator/navigator.component";
import {NgModule} from "@angular/core";
import {PageMainComponent} from "./page-main/page-main.component";
import {PageProductListComponent} from "./page-product-list/page-product-list.component";
import {PageProductFormComponent} from "./page-product-form/page-product-form.component";

const routes: Routes = [
  {path: "", redirectTo: "main-page", pathMatch: "full"},
  {path: "main-page", component: PageMainComponent},
  {path: "product-list", component: PageProductListComponent},
  {path: "product-form", component: PageProductFormComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
