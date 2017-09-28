import {Dish} from '../../shared/Controllers.generated';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dinner-menucard-administration',
  templateUrl: './menucard-administration.component.html',
  styleUrls: ['./menucard-administration.component.sass']
})
export class MenucardAdministrationComponent implements OnInit {
  @Input() restaurantId;
  @Input() dishes: Dish[];

  constructor() { }

  ngOnInit() {
  }

}
