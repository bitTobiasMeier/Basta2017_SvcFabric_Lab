import {RestaurantTable, Restaurant,  AdminClient} from '../shared/Controllers.generated';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dinner-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private adminClient: AdminClient) { }

  ngOnInit() {
    this.adminClient.get().subscribe(
      response => this.restaurants = response != null ? response : []
    );
  }

    restaurantAdded (restaurant: Restaurant) {
      this.restaurants = this.restaurants.concat([restaurant]);
  }


}
