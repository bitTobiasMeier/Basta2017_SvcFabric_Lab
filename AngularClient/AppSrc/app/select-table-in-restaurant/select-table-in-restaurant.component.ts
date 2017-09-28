import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantAdminClient, RestaurantTable } from '../shared/Controllers.generated';

@Component({
  selector: 'dinner-select-table-in-restaurant',
  templateUrl: './select-table-in-restaurant.component.html',
  styleUrls: ['./select-table-in-restaurant.component.sass']
})
export class SelectTableInRestaurantComponent implements OnInit {
  restaurantId: string;
  tables: RestaurantTable [];
  constructor(private route: ActivatedRoute, private restaurantAdminClient: RestaurantAdminClient) {

  }

  ngOnInit() {
    this.tables = [];
    this.restaurantId = this.route.snapshot.parent.params['restaurantId'];
    this.restaurantAdminClient.getTables(this.restaurantId).subscribe (
      tables => {
        this.tables = tables;
      },
      (error) => {
        console.log (error);
      }
    );
  }

}
