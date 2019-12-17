import { Component, OnInit } from '@angular/core';
import { accordionWithPlusMinusSign } from '../../utilities/hcn-utills';

@Component({
  selector: 'app-degree-program',
  templateUrl: './degree-program.component.html',
  styleUrls: ['./degree-program.component.css']
})
export class DegreeProgramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    accordionWithPlusMinusSign();
  }

}
