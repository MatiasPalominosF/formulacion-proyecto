import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-my-store-view',
  templateUrl: './my-store-view.component.html',
  styleUrls: ['./my-store-view.component.css']
})
export class MyStoreViewComponent implements OnInit {

  public product: any;
  public uid: any;
  constructor(
    private router: ActivatedRoute) {

    
  }

  ngOnInit(): void {
    this.uid = this.router.snapshot.paramMap.get('uid');
    console.log("this.router.snapshot.paramMap", this.router.snapshot.paramMap);
  }

}
