import {RestaurantTable, RestaurantAdminClient} from '../../shared/Controllers.generated';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'dinner-add-restaurant-table',
  templateUrl: './add-restaurant-table.component.html',
  styleUrls: ['./add-restaurant-table.component.sass']
})
export class AddRestaurantTableComponent implements OnInit {
  @Input() restaurantId: string;
  @Output() tableAdded = new EventEmitter<RestaurantTable>();
  message: string;
  tablenr: number;

  constructor(private restaurantAdminClient: RestaurantAdminClient) { }

  ngOnInit() {
  }

  async save(value: any) {
    const table = new RestaurantTable();
    table.tablenr = this.tablenr ;

    this.restaurantAdminClient.createTable (this.restaurantId, table).subscribe( addedTable => {
      this.message = 'Tisch ' + addedTable.tablenr + ' wurde hinzugefügt';
      this.tableAdded.emit(addedTable);
    },
    error  => {
      this.message = 'Fehler beim Speichern ';
      if (error.message) {
        this.message += error.message;
      }
      if (error.status) {
        this.message += ';Status: ' + error.status;
      }
    }
    );
  }

}
