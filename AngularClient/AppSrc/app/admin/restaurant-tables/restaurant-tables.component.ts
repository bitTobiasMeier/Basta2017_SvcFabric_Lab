import {RestaurantTable} from '../../shared/Controllers.generated';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dinner-restaurant-tables',
  templateUrl: './restaurant-tables.component.html',
  styleUrls: ['./restaurant-tables.component.sass']
})
export class RestaurantTablesComponent implements OnInit {
  @Input() restaurantId: string;
  @Input() restaurantTables: RestaurantTable[];

  constructor() { }

  ngOnInit() {

  }



}
