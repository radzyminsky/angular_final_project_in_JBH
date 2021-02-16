import { HttpClient } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { coin } from './interfaces';
import { CoinsService } from './coins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ListOfCoins: coin[];
  for_live_reports: coin[];
  index: number;
  over: boolean;


  constructor(private coinsService: CoinsService) {
    this.ListOfCoins = [];
    this.for_live_reports = [];
    this.over = false;

  }

  add_or_remove(id: coin): void {
    this.index = this.for_live_reports.findIndex(x => x === id);
    if (this.index != -1) {
      this.for_live_reports.splice(this.index, 1);
      this.over = false;
    }
    else if (this.for_live_reports.length > 4) {
      id.checked = false;
      this.over = true;
    }
    else {
      this.for_live_reports.push(id);
    }
    console.log(this.for_live_reports);
  }

  Cancel(): void {
    this.over = false;
  }

  ngOnInit(): void {

    this.coinsService.Get('https://api.coingecko.com/api/v3/coins/list').subscribe(data => {
      for (let i = 0; i < 100; i++) {
        this.ListOfCoins[i] = { id: data[i].id, name: data[i].name, symbol: data[i].symbol, checked: false };
      }
    });
  }

}


