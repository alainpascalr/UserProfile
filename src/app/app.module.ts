import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DataService} from './data.service';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AngularFontAwesomeModule} from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
