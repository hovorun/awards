import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { FirstPressComponent } from './content/first-press/first-press.component';
import { SecondPressComponent } from './content/second-press/second-press.component';
import { FooterComponent } from './footer/footer.component';
import { PressThirdComponent } from './press-third/press-third.component';
import { PressFourthComponent } from './content/press-fourth/press-fourth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContentComponent,
    FirstPressComponent,
    SecondPressComponent,
    FooterComponent,
    PressThirdComponent,
    PressFourthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
