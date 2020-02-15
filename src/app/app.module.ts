import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_CONFIG, AppConfig } from './app.config';
import { AppRoutingModule } from './app-routing.module';
import { StarWarCelebrityComponent } from './starWarCelebrity/starWarCelebrity.component';
import {PersonService} from "./service/person.Service";
import {ApiService} from "./service/api.service";
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    StarWarCelebrityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
   
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },PersonService,ApiService],
  bootstrap: [StarWarCelebrityComponent]
})
export class AppModule { }
