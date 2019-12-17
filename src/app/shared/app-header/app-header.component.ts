import { Component, OnInit } from '@angular/core';

import { openSideNavbar } from 'src/app/utills/utills';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    openSideNavbar();
  }

}
