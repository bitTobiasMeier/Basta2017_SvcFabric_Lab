import { Component, OnInit } from '@angular/core';
import { OrderClient, RestaurantClient, TableOrder } from '../shared/Controllers.generated';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'dinner-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.sass']
})
export class OrderStatusComponent implements OnInit {

  restaurantId: string;
  tableId: string;
  orders: TableOrder[] = [];
  constructor(private route: ActivatedRoute, private restaurantClient: RestaurantClient,
    private orderClient: OrderClient) { }

  ngOnInit() {
    this.restaurantId = this.route.snapshot.parent.parent.params['restaurantId'];
    this.tableId = this.route.snapshot.parent.params['tableId'];
    const that = this;
    this.orderClient.getOrders(that.tableId).subscribe(
      orders => {
        that.orders = orders;
      },
      error => {
        console.log('Fehler beim Laden der Bestellungen des Tisches: ' + error);
      }
    );

    Observable.timer(10, 10).subscribe(
      data => {
        that.orderClient.getOrders(that.tableId).subscribe(
          orders => {
            that.orders = orders;
          },
          error => {
            console.log('Fehler beim Laden der Bestellungen des Tisches: ' + error);
          }
        );
      }
    );

  }

}
