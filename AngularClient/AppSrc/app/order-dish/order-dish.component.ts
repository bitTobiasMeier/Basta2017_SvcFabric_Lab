import { Component, OnInit } from '@angular/core';
import {Order, OrderClient,  RestaurantAdminClient,   RestaurantClient,   Dish} from '../shared/Controllers.generated';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'dinner-order-dish',
  templateUrl: './order-dish.component.html',
  styleUrls: ['./order-dish.component.sass']
})
export class OrderDishComponent implements OnInit {
  private restaurantId: string;
  private tableId: string;
  dishes: Dish [];
  message: string;

  constructor(private route: ActivatedRoute, private restaurantClient: RestaurantClient,
    private restaurantAdminClient: RestaurantAdminClient,
  private orderClient: OrderClient) { }

  ngOnInit() {
    this.dishes = [];
    this.restaurantId = this.route.snapshot.parent.parent.params['restaurantId'];
    this.tableId = this.route.snapshot.parent.params['tableId'];

    this.restaurantAdminClient.getMenuCard (this.restaurantId).subscribe (
      dishes => {
          this.dishes = dishes;
      },
      error => {
        console.log (error);
      }
    );
  }

  order (dish: Dish) {
    this.message = 'Bestellung starten';
    const order =  new Order();
    order.dishId = dish.id;
    order.price = dish.price;
    order.tableId = this.tableId;
    order.restaurantId = this.restaurantId;
    const that = this;
    this.orderClient.create(order).subscribe (
      orderresult => {
        that.message =  dish.name + ' ist bestellt! Order id ' + orderresult.orderId + ' State: ' + orderresult.orderState;
      },
      error => {
        console.log ('Bestellung konnte nicht abgegeben werden!' + error);
        that.message = 'Bestellung konnte nicht abgegeben werden!' + error;
      }
    );
  }

}
