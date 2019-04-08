import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponentComponent} from './ar/login-component/login-component.component';
import {ArabicMainComponent} from './ar/arabic-main/arabic-main.component';
import {IndexPageComponent} from './ar/pages/index-page/index-page.component';
import {ContactUsComponent} from './ar/pages/contact-us/contact-us.component';
import {AboutUsComponent} from './ar/pages/about-us/about-us.component';
import {FlightRouteComponent} from "./ar/pages/Flight/flight-route/flight-route.component";
import {FlightListComponent} from "./ar/pages/Flight/flight-list/flight-list.component";
import {TrainListComponent} from "./ar/pages/Train/train-list/train-list.component";
import {TrainRouteComponent} from "./ar/pages/Train/train-route/train-route.component";
import {ExhangeRouteComponent} from "./ar/pages/Exhange/exhange-route/exhange-route.component";
import {ExchangeListComponent} from "./ar/pages/Exhange/exhnage-list/exchange-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/ar', pathMatch: 'full'},
  {path: 'ar', component: ArabicMainComponent , children:
  [
    {path: '', component : IndexPageComponent},
    {path: 'login', component: LoginComponentComponent},
    {path: 'contact', component: ContactUsComponent},
    {path: 'about', component: AboutUsComponent  },
    {path: 'flight', component: FlightRouteComponent, children: [
        {path: '', component: FlightListComponent}
      ]},
    {path: 'train', component: TrainRouteComponent, children: [
        {path: '', component: TrainListComponent}
      ]},
    {path: 'exchange', component: ExhangeRouteComponent, children: [
        {path: '', component: ExchangeListComponent }
      ]},

  ]},



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {
}
