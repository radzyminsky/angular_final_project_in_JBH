import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { coin, price } from '../interfaces';
import { CoinsService } from '../coins.service';


@Component({
  selector: 'app-coin-comp',
  templateUrl: './coin-comp.component.html',
  styleUrls: ['./coin-comp.component.css']
})

export class CoinCompComponent implements OnInit {
  @Input() coin: coin;

  @Output() event_name: EventEmitter<coin> = new EventEmitter<coin>();

  show: boolean;
  Price: price;
  


  constructor(private coinService: CoinsService) {
    this.show = true;
    this.Price = null;
    this.event_name = new EventEmitter();
  }
  

  add(): void {
    this.event_name.emit(this.coin);
  }

  Clicked(): void {
    this.coin.checked = !this.coin.checked;
    console.log(this.coin.checked);
    this.add();
  }

  onClick(): void {
    this.show = !this.show;
    if (!this.Price) {
      this.coinService.Get("https://api.coingecko.com/api/v3/coins/" + this.coin.id).subscribe(data => {
        this.Price = {
          usd: data.market_data.current_price.usd + " &#36;",
          ils: data.market_data.current_price.ils + " &#8362;",
          eur: data.market_data.current_price.eur + " &#8364;"
        };

      })

    }

  }



  ngOnInit(): void {
  }

}
