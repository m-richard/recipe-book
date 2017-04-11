import { Component, OnInit } from '@angular/core';

import { Ingredient } from './ingredient.model';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Potatoes', 5),
    new Ingredient('Tomatoes', 9),
  ];

  constructor() { }

  ngOnInit() {
  }

}
