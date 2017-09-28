import { Component, OnInit } from '@angular/core';
import {RestaurantTable, RestaurantClient} from '../shared/Controllers.generated';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dinner-selected-table',
  templateUrl: './selected-table.component.html',
  styleUrls: ['./selected-table.component.sass']
})
export class SelectedTableComponent implements OnInit {

  restaurantId: string;
  tableId: string;
  table: RestaurantTable;
  constructor(private route: ActivatedRoute, private restaurantClient: RestaurantClient) { }

  ngOnInit() {
    this.restaurantId = this.route.snapshot.parent.params['restaurantId'];
    this.tableId = this.route.snapshot.params['tableId'];
    this.restaurantClient.getTable (this.restaurantId, this.tableId).subscribe(
      table => {
        this.table = table;
      },
      error => {
        console.log('Error beim Laden der Table');
      }
    );
  }

}
