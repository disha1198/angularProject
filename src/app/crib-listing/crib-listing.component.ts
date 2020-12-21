import { cribs } from './../../data/crib';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any> = cribs;

  constructor() { }

  ngOnInit(): void {
  }

}
