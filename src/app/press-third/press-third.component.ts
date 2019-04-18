import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-press-third',
  templateUrl: './press-third.component.html',
  styleUrls: ['./press-third.component.css']
})
export class PressThirdComponent implements OnInit {
  @Input() pressText;
  @Input() pressRegion;
  @Input() imgName;


  constructor() { }

  ngOnInit() {
  }

}
