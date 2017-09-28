import { Restaurant, AdminClient } from '../shared/Controllers.generated';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'dinner-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.sass']
})
export class RestaurantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
