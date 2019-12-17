import { Component, OnInit } from '@angular/core';
declare var $ :any; 
@Component({
  selector: 'app-hcn-home',
  templateUrl: './hcn-home.component.html',
  styleUrls: ['./hcn-home.component.css']
})
export class HcnHomeComponent implements OnInit {

  constructor() { }
  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  ngOnInit() {
    $('.carousel').carousel();
  }

}
