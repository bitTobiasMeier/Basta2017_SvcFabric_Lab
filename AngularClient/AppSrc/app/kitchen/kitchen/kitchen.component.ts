import { RestaurantAdminClient, KitchenClient, KitchenOrder, RestaurantClient, Dish } from '../../shared/Controllers.generated';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'dinner-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.sass']
})
export class KitchenComponent implements OnInit {  
  dishMap: Map<string, Dish>;
  restaurantNr: string;
  kitchenQueue: KitchenOrder[];
  cookingQueue: KitchenOrder[];
  private subWaiting: Subscription;
  private subCooking: Subscription;
  private alive = true;
  constructor(private route: ActivatedRoute, private kitchenClient: KitchenClient, private restaurantClient: RestaurantAdminClient) { }

  ngOnInit() {
    this.kitchenQueue = [];
    this.cookingQueue = [];
    this.restaurantNr = this.route.snapshot.params['restaurantId'];
    this.restaurantClient.getMenuCard(this.restaurantNr).subscribe (
      dishes=> {        
        this.dishMap = new Map<string,Dish>();
        dishes.forEach (
          dish=> {
            this.dishMap.set(dish.id, dish);
          }
        );
      }
    );

    

    this.kitchenClient.getKitchenQueue(this.restaurantNr).subscribe(
      kitchenOrders => {
        this.kitchenQueue = kitchenOrders;
      }
    );
    this.kitchenClient.getKitchenCookingQueue(this.restaurantNr).subscribe(
      kitchenOrders => {
        this.cookingQueue = kitchenOrders;
      }
    );

    const that = this;

    IntervalObservable.create(2000).subscribe(
      data => {
        if (that.subWaiting != null) {
          that.subWaiting.unsubscribe();
        }
        that.subWaiting = that.kitchenClient.getKitchenQueue(that.restaurantNr).subscribe(
          kitchenOrders => {
            that.kitchenQueue = kitchenOrders;
          }
        );
        if (that.subCooking != null) {
          that.subCooking.unsubscribe();
        }
        that.subCooking = that.kitchenClient.getKitchenCookingQueue(that.restaurantNr).subscribe(
          kitchenOrders => {
            that.cookingQueue = kitchenOrders;
          }
        );

      }
    );

  }

  getDishname (id : string): string{
    var found = this.dishMap.get(id);
    if (found)
      return found.name;
      return id;
  }

  ngOnDestroy() {
    this.alive = false;
    this.subCooking.unsubscribe();
    this.subWaiting.unsubscribe();

  }

}
