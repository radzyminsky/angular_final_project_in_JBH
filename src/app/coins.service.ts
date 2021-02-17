import { Injectable } from '@angular/core';
import { getAPIservis } from './getAPI.service';
import { coin } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  ListOfCoins: coin[];
  for_live_reports: coin[];
  

  constructor() { 
    this.ListOfCoins = [];
    this.for_live_reports = [];
  }

  
}
