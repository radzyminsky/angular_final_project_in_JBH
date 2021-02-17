import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../coins.service';
import { getAPIservis } from '../getAPI.service';
import { coin } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show_button: boolean;
  index: number;
  over: boolean;
  ListOfCoins: coin[];
  for_live_reports: coin[];
  

  constructor(private coinsService: CoinsService, private getAPI: getAPIservis) {

    this.over = false;
    this.show_button = true;
    this.ListOfCoins=this.coinsService.ListOfCoins;
  this.for_live_reports=this.coinsService.for_live_reports;
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

    this.getAPI.Get('https://api.coingecko.com/api/v3/coins/list').subscribe(data => {
      for (let i = 0; i < 100; i++) {
        this.ListOfCoins[i] = { id: data[i].id, name: data[i].name, symbol: data[i].symbol, checked: false };
      }
    });
  }

}
