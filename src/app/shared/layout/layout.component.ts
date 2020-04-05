import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  sideBarOpened = true;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(event) {
    this.sideBarOpened = !this.sideBarOpened;
  }

}
