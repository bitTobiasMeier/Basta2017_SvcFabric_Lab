import {Restaurant, SwaggerException,  AdminClient,   IAdminClient} from '../../shared/Controllers.generated';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'dinner-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.sass']
})
export class AddRestaurantComponent implements OnInit {
  name: string;
  message: string;
  @Output() restaurantAdded = new EventEmitter<Restaurant>();

  constructor(private adminClient: AdminClient) { }

  ngOnInit() {
  }

  async save(value: any) {
    const restaurant = new Restaurant();
    restaurant.name = this.name ;
    this.adminClient.create (restaurant).subscribe( addedRestaurant => {
      this.message = 'Restaurant ' + addedRestaurant.name  + '  added';
      this.restaurantAdded.emit(addedRestaurant);
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
