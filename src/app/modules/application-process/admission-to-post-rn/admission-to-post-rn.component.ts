import { Component, OnInit } from '@angular/core';

import { accordionWithPlusMinusSign } from '../../../utilities/hcn-utills';

@Component({
  selector: 'app-admission-to-post-rn',
  templateUrl: './admission-to-post-rn.component.html',
  styleUrls: ['./admission-to-post-rn.component.css']
})
export class AdmissionToPostRNComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    accordionWithPlusMinusSign();
  }

}
