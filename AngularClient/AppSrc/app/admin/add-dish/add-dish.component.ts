import {RestaurantAdminClient, Dish} from '../../shared/Controllers.generated';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dinner-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.sass']
})
export class AddDishComponent implements OnInit {
  @Input() restaurantId: string;
  @Output() dishAdded = new EventEmitter < Dish >();
  name: string;
  message: string;
  price: number;
  description: string;
  imageUrl: string;


  constructor(private restaurantAdminClient: RestaurantAdminClient) { }

  save (value: any) {
    const dish = new Dish();
    dish.name = this.name;
    dish.price = this.price;
    dish.description = this.description;
    dish.imageUrl = this.imageUrl;
      this.restaurantAdminClient.addDish(this.restaurantId, dish).subscribe(
        (result) => {
            this.dishAdded.emit ( result );
        },
        (error) => {
            console.log(error);
        }
      );
  }

  ngOnInit() {


  }

}
