import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../coins.service';
import { coin } from '../interfaces';

@Component({
  selector: 'app-live-report',
  templateUrl: './live-report.component.html',
  styleUrls: ['./live-report.component.css']
})
export class LiveReportComponent implements OnInit {

  show: boolean;
  show_button: boolean;
  for_live_reports: coin[];


  constructor(private coinsService: CoinsService) {
    this.show = false;
    this.show_button = false;
    this.for_live_reports=this.coinsService.for_live_reports;
  }

  ngOnInit(): void {
  }

}
