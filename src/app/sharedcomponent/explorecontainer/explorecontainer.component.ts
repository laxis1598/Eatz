import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorecontainer',
  templateUrl: './explorecontainer.component.html',
  styleUrls: ['./explorecontainer.component.scss']
})
export class ExplorecontainerComponent implements OnInit {

  constructor() { }

  //initial declaration
  count:Array<number>=[1,2,3,4,5,6];

  ngOnInit(): void {
  }

}
