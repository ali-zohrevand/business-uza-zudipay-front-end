import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponentComponent} from './ar/login-component/login-component.component';
import {ArabicMainComponent} from './ar/arabic-main/arabic-main.component';
import {IndexPageComponent} from './ar/pages/index-page/index-page.component';
import {ContactUsComponent} from './ar/pages/contact-us/contact-us.component';
import {AboutUsComponent} from './ar/pages/about-us/about-us.component';

const routes: Routes = [
  {path: '', redirectTo: '/ar', pathMatch: 'full'},
  {path: 'login', component: LoginComponentComponent},
  {path: 'ar', component: ArabicMainComponent , children:
  [
    {path: '', component : IndexPageComponent},
    {path: 'contact', component: ContactUsComponent},
    {path: 'about', component: AboutUsComponent  }
  ]},



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {
}
