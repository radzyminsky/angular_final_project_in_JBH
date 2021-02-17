import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }from '@angular/common/http'
import { AppComponent } from './app.component';
import { CoinCompComponent } from './coin-comp/coin-comp.component';
import { PiperPipe } from './piper.pipe';
import { HomeComponent } from './home/home.component';
import { LiveReportComponent } from './live-report/live-report.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'liveReport',component:LiveReportComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CoinCompComponent,
    PiperPipe,
    HomeComponent,
    LiveReportComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
