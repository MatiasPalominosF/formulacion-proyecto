import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterEvent } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-my-store-view',
  templateUrl: './my-store-view.component.html',
  styleUrls: ['./my-store-view.component.css']
})
export class MyStoreViewComponent implements OnInit {

  public product: any;
  public uid: any;
  public carouselTwo = [
    '../../../assets/images/carousel/08.jpg',
    '../../../assets/images/carousel/03.jpg',
    '../../../assets/images/carousel/01.jpg'
  ];
  constructor(
    private router: ActivatedRoute,
    private config: NgbCarouselConfig
  ) {
    config.interval = 3000;
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.uid = this.router.snapshot.paramMap.get('uid');
    console.log("this.router.snapshot.paramMap", this.router.snapshot.paramMap);
  }

}
