import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponentComponent} from './login-component/login-component.component';
import {MainPageComponent} from './ar/main-page/main-page.component';
import {ArabicMainComponent} from './ar/arabic-main/arabic-main.component';

const routes: Routes = [
  {path: '', redirectTo: '/ar', pathMatch: 'full'},
  {path: 'login', component: LoginComponentComponent},
  {path: 'ar', component: ArabicMainComponent , children:
  [
    {path: '', component : MainPageComponent},
  ]},



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {
}
