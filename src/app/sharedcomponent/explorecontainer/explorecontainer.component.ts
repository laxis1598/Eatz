import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/constants/constant.component';

@Component({
  selector: 'app-explorecontainer',
  templateUrl: './explorecontainer.component.html',
  styleUrls: ['./explorecontainer.component.scss']
})
export class ExplorecontainerComponent implements OnInit {

  constructor() { }

  //initial declaration
  count:Array<number>=[1,2,3,4,5,6];
  exploreDescription:string=Constant.exploreDescription;
  exploreTitle:string=Constant.exploreTitle;
  exploreCardDescription:string=Constant.exploreCardDescription;


  ngOnInit(): void {
  }

}
