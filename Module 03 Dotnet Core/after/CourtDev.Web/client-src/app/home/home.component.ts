import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'CourtDev';
  
  constructor() { }

  ngOnInit() {
  }

}
