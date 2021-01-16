import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // This is how in real world we need to import data using making an HTTP request
    this.http.get('data/crib.json')
    .pipe(map((res) => res))
    .subscribe(
      data => {console.log(data);
        
    // map(res => res.json())
    // subscribe(
    //   data => console.log(data)
    // )
    }
    )
  }
  }
