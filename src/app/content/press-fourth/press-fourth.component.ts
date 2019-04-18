import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-press-fourth',
  templateUrl: './press-fourth.component.html',
  styleUrls: ['./press-fourth.component.css']
})
export class PressFourthComponent implements OnInit {
  @Input() pressText;
  @Input() pressRegion;
  @Input() imgName;

  constructor() { }

  ngOnInit() {
  }

}
