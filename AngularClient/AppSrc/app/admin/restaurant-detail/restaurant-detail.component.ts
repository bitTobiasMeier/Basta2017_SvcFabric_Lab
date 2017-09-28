import {Dish, RestaurantAdminClient,  RestaurantTable,   Restaurant} from '../../shared/Controllers.generated';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dinner-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.sass']
})
export class RestaurantDetailComponent implements OnInit {
  @Input() restaurant: Restaurant;
  restaurantTables: RestaurantTable [];
  dishes: Dish [];
  constructor(private restaurantAdmin: RestaurantAdminClient) { }

  ngOnInit() {
    this.restaurantTables = [];
    this.dishes = [];
    this.restaurantAdmin.getTables(this.restaurant.id).subscribe(
      list => {
        this.restaurantTables = list;
        console.log('tables loaded:' + list.length);
      },
      (error) => {
        console.log ('Fehler beim Laden der Tische' + error);
        // error
      }
    );
    this.restaurantAdmin.getMenuCard(this.restaurant.id).subscribe(
      list => {
        this.dishes = list;
        console.log('dishes loaded:' + list.length);
      },
      (error) => {
        console.log ('Fehler beim Laden der Menükarte' + error);
        // error
      }
    );
  }

  restaurantTableAdded (table: RestaurantTable) {
    if (table) {
      this.restaurantTables = this.restaurantTables.concat([table]);
    }
   }

   dishAdded (dish: Dish) {
    if (dish) {
      this.dishes = this.dishes.concat([dish]);
    }
   }

}
