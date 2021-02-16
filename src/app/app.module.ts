import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }from '@angular/common/http'
import { AppComponent } from './app.component';
import { CoinCompComponent } from './coin-comp/coin-comp.component';
import { PiperPipe } from './piper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoinCompComponent,
    PiperPipe
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
