import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'actionbutton',
  templateUrl: './actionbutton.component.html',
  styleUrls: ['./actionbutton.component.less']
})
export class ActionButtonComponent implements OnInit {

  @Input() src;

  constructor() { }

  ngOnInit(): void {
  }

}
