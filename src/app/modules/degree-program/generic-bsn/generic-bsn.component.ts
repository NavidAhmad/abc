import { Component, OnInit } from '@angular/core';

import { accordionWithPlusMinusSign } from '../../../utilities/hcn-utills';

@Component({
  selector: 'app-generic-bsn',
  templateUrl: './generic-bsn.component.html',
  styleUrls: ['./generic-bsn.component.css']
})
export class GenericBsnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    accordionWithPlusMinusSign();
  }

}
