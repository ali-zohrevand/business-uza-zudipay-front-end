import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SearchTopComponent } from './search-top/search-top.component';
import { SlideArticleComponent } from './slide-article/slide-article.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SearchTopComponent,
    SlideArticleComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
