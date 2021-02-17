import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { coin, price } from '../interfaces';
import { getAPIservis } from '../getAPI.service';


@Component({
  selector: 'app-coin-comp',
  templateUrl: './coin-comp.component.html',
  styleUrls: ['./coin-comp.component.css']
})

export class CoinCompComponent implements OnInit {
  @Input() coin: coin;
  @Input()show ;
  @Input()show_button:boolean;
  @Output() event_name: EventEmitter<coin> = new EventEmitter<coin>();

  Show: boolean;
  Price: price;
  


  constructor(private getAPI: getAPIservis) {
    if(typeof(this.show)==="boolean"){
      this.Show=this.show;
    }
    this.Show = true;
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
    this.Show = !this.Show;
    if(!this.Show){
      this.get_price();
    }

  }

  get_price(){
    if (!this.Price) {
      this.getAPI.Get("https://api.coingecko.com/api/v3/coins/" + this.coin.id).subscribe(data => {
        this.Price = {
          usd: data.market_data.current_price.usd ,
          ils: data.market_data.current_price.ils + " &#8362;",
          eur: data.market_data.current_price.eur + " &#8364;"
        };

      })

    }
  }



  ngOnInit(): void {
    if(!this.Show){
      this.get_price();
    }
  }

}
