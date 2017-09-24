import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRestaurantComponent } from './admin-restaurant/admin-restaurant.component';
import { AdminComponent } from './admin/admin.component';
import { AddRestaurantComponent } from './Admin/add-restaurant/add-restaurant.component';
import { API_BASE_URL, RestaurantAdminClient, AdminClient, OrderClient, RestaurantClient,KitchenClient } from './shared/Controllers.generated';
import { RestaurantTablesComponent } from './admin/restaurant-tables/restaurant-tables.component';
import { AddRestaurantTableComponent } from './admin/add-restaurant-table/add-restaurant-table.component';
import { RestaurantDetailComponent } from './admin/restaurant-detail/restaurant-detail.component';
import { MenucardAdministrationComponent } from './admin/menucard-administration/menucard-administration.component';
import { AddDishComponent } from './admin/add-dish/add-dish.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SelectRestaurantComponent } from './select-restaurant/select-restaurant.component';
import { SelectTableInRestaurantComponent } from './select-table-in-restaurant/select-table-in-restaurant.component';
import { SelectedTableComponent } from './selected-table/selected-table.component';
import { OrderDishComponent } from './order-dish/order-dish.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { KitchenComponent } from './kitchen/kitchen/kitchen.component';
import { KitchensComponent } from './kitchen/kitchens/kitchens.component';
import { SelectKitchenComponent } from './kitchen/select-kitchen/select-kitchen.component';



let API_BASE_URL2 = 'http://localhost:8328';


if (window != null && window.location != null) {
      const loc = window.location;
      const server = loc.hostname;
      let port =  loc.port;
      if (server === 'localhost' && port === '4200') {
        //Falls der Client direkt aus VSCode mit dem Serverstand 6.1 verwendet wird, ist das Protokoll auf http zu ändern:
        API_BASE_URL2 = "https://localhost:8333";
      }
      else {
        API_BASE_URL2 = loc.protocol + '//' +  server + ':' + port;
      }
     
}




@NgModule({
  declarations: [
    AppComponent,
    AdminRestaurantComponent,
    AdminComponent,
    AddRestaurantComponent,
    RestaurantTablesComponent,
    AddRestaurantTableComponent,
    RestaurantDetailComponent,
    MenucardAdministrationComponent,
    AddDishComponent,
    RestaurantsComponent,
    RestaurantComponent,
    SelectRestaurantComponent,
    SelectTableInRestaurantComponent,
    SelectedTableComponent,
    OrderDishComponent,
    OrderStatusComponent,
    KitchenComponent,
    KitchensComponent,
    SelectKitchenComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AdminClient, RestaurantAdminClient, OrderClient, RestaurantClient,KitchenClient,
    {provide: API_BASE_URL, useValue: API_BASE_URL2}
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
