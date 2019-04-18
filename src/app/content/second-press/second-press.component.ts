import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-second-press',
  templateUrl: './second-press.component.html',
  styleUrls: ['./second-press.component.css']
})
export class SecondPressComponent implements OnInit {
  @Input() pressSecondText;
  @Input()  pressSecondDate;
  constructor() { }

  ngOnInit() {
  }

}
