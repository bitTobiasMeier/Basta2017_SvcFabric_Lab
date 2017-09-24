import {Restaurant, AdminClient} from '../../shared/Controllers.generated';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dinner-select-kitchen',
  templateUrl: './select-kitchen.component.html',
  styleUrls: ['./select-kitchen.component.sass']
})
export class SelectKitchenComponent implements OnInit {

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
