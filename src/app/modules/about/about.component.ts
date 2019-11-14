import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // .... props ...
  routeLinks={
    hcnIntroduction:{
      link:'/aboutHcn/hcn-introduction',
      text:'introduction'
    },
    hcnMission:{
      link:'aboutHcn/hcn-mission',
      text:'mission'
    },
    hcnVision:{
      link:'aboutHcn/hcn-vision',
      text:'vision'
    },
    hcnObjectives:{
      link:'aboutHcn/hcn-objectives',
      text:'objectives'
    },
    hcnProfessionalValues:{
      link:'aboutHcn/hcn-professional-values',
      text:'professional values'
    },

  }

  constructor() { }

  ngOnInit() {
    
  }

}
