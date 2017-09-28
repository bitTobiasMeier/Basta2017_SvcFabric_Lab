import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SelectRestaurantComponent } from './select-restaurant/select-restaurant.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SelectTableInRestaurantComponent } from './select-table-in-restaurant/select-table-in-restaurant.component';
import { SelectedTableComponent } from './selected-table/selected-table.component';
import { OrderDishComponent } from './order-dish/order-dish.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { KitchensComponent } from './kitchen/kitchens/kitchens.component';
import { KitchenComponent } from './kitchen/kitchen/kitchen.component';
import { SelectKitchenComponent } from './kitchen/select-kitchen/select-kitchen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'restaurants',
    pathMatch: 'full'
  },
  {
    path: 'restaurants', component: RestaurantsComponent,
    children: [
      {
      path: '',
      redirectTo: 'select',
      pathMatch: 'full'
      },
      {
        path: 'select',
        component: SelectRestaurantComponent
      },
      {
        path: ':restaurantId',
        component: RestaurantComponent,
        children: [
          {
            path: '',
            redirectTo: 'select',
            pathMatch: 'full'
          },
          {
            path: 'select',
            component: SelectTableInRestaurantComponent
          },
          {
            path: ':tableId',
            component: SelectedTableComponent,
            children: [
              {
                path: '',
                redirectTo: 'order',
                pathMatch: 'full'
              },
              {
                path: 'order',
                component: OrderDishComponent
              },
              {
                path: 'status',
                component: OrderStatusComponent
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: 'kitchens', component: KitchensComponent,
    children: [
      {
      path: '',
      redirectTo: 'select',
      pathMatch: 'full'
      },
      {
        path: 'select',
        component: SelectKitchenComponent
      },
      {
        path: ':restaurantId',
        component: KitchenComponent
      }
    ]
  },
  {
    path: 'admin', component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
