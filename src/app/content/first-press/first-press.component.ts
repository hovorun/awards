import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-press',
  templateUrl: './first-press.component.html',
  styleUrls: ['./first-press.component.css']
})
export class FirstPressComponent implements OnInit {
  @Input() pressText;
  @Input() pressDate;
  @Input() imgName;

  constructor() { }

  ngOnInit() {
  }

}
