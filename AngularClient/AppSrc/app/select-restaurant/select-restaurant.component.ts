import {AdminClient, Restaurant} from '../shared/Controllers.generated';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dinner-select-restaurant',
  templateUrl: './select-restaurant.component.html',
  styleUrls: ['./select-restaurant.component.sass']
})
export class SelectRestaurantComponent implements OnInit {

  restaurants: Restaurant [];
  constructor(private restaurantClient: AdminClient ) { }

  ngOnInit() {
    this.restaurantClient.get().subscribe (
      restaurants => {
        this.restaurants = restaurants;
      },
      (error) => {
        console.log ('Restaurants konnten nicht geladen werden: ' + error);
      }
    );
  }

}
