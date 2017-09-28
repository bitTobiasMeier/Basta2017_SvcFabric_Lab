import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Restaurant, RestaurantClient} from '../shared/Controllers.generated';



@Component({
  selector: 'dinner-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.sass']
})
export class RestaurantComponent implements OnInit {

  restaurantNr: string;
  restaurant: Restaurant;
  constructor ( private route: ActivatedRoute, private restaurantClient: RestaurantClient ) { }

  ngOnInit() {
    this.restaurantNr = this.route.snapshot.params['restaurantId'];
    this.restaurantClient.get(this.restaurantNr).subscribe (
      (restaurant) => {
        this.restaurant = restaurant;
      },
      (error) => {
        console.log ('Fehler beim Laden des Restaurants');
      }
    );
}
}
