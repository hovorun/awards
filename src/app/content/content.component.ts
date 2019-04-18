import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  firstText = 'Q8 Trade Extends Sponsorship Deal with Kuwait Team Al-Qadsia Through 2019';
  secondText = ' Exclusive: Q8 Securities Launches New FX platform in Middle East';
  firstDate =  'July 5, 2018';
  secondDate = 'July 17, 2017';
  firstImg = 'awards_1.png';
  secondImg = 'fx_platform.png';
  thirdImg = 'business_awards.png';
  fourthImg = 'brands_awards.png';
  texts = ['Title: Fastest Growing Forex Brand', 'Title: Best Regional Forex Trading Platform'];
  regions = ['MENA'];
  secondFirstText = 'Q8Trade Sponsors Kuwait Soccer';
  secondFirstDate = 'November 13, 2017';




  constructor() { }

  ngOnInit() {
  }

}
