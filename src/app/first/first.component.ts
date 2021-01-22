import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  ab:string[]=['ha','hoi','koi'];
  show: boolean = true;
  alp = 'abc';

  constructor() { }

  ngOnInit(): void {
  }
}
