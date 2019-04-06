import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ar/header/header.component';
import { MenuComponent } from './ar/header/menu/menu.component';
import { FooterComponent } from './ar/footer/footer.component';
import { SearchTopComponent } from './ar/search-top/search-top.component';
import { SlideArticleComponent } from './ar/slide-article/slide-article.component';
import { NewsletterComponent } from './ar/newsletter/newsletter.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {
  MatDatepickerModule,
  MatFormFieldModule, MatInputModule, MatNativeDateModule,
  MatPaginator,
  MatPaginatorModule, MatSelectModule,
  MatSort, MatSortModule,
  MatTableDataSource,
  MatTableModule
} from '@angular/material';
import {AppRoutes} from './app-routes';
import { LoginComponentComponent } from './ar/login-component/login-component.component';
import { ArabicMainComponent } from './ar/arabic-main/arabic-main.component';
import { ContactUsComponent } from './ar/pages/contact-us/contact-us.component';
import { IndexPageComponent } from './ar/pages/index-page/index-page.component';
import { AboutUsComponent } from './ar/pages/about-us/about-us.component';
import { FlightListComponent } from './ar/pages/Flight/flight-list/flight-list.component';
import { TrainListComponent } from './ar/pages/Train/train-list/train-list.component';
import { TrainRequestComponent } from './ar/pages/Train/train-request/train-request.component';
import { FlightRouteComponent } from './ar/pages/Flight/flight-route/flight-route.component';
import { TrainRouteComponent } from './ar/pages/Train/train-route/train-route.component';
import { ExhangeRouteComponent } from './ar/pages/Exhange/exhange-route/exhange-route.component';
import { ExchangeListComponent } from './ar/pages/Exhange/exhnage-list/exchange-list.component';
import { ExhangeRequestComponent } from './ar/pages/Exhange/exhange-request/exhange-request.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SearchTopComponent,
    SlideArticleComponent,
    NewsletterComponent,
    LoginComponentComponent,
    ArabicMainComponent,
    ContactUsComponent,
    IndexPageComponent,
    AboutUsComponent,
    FlightListComponent,
    TrainListComponent,
    TrainRequestComponent,
    FlightRouteComponent,
    TrainRouteComponent,
    ExhangeRouteComponent,
    ExchangeListComponent,
    ExhangeRequestComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,        // <----- import for date formating(optional)
    MatPaginatorModule,
    MatSortModule,
    AppRoutes,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
