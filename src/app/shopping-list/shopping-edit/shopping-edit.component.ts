import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  invalidAddAction: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    if (ingredientName && ingredientAmount) {
      this.invalidAddAction = false;
      const newIngredient = new Ingredient(ingredientName, ingredientAmount);
      this.ingredientAdded.emit(newIngredient);
    } else {
      this.invalidAddAction = true;
    }
  }
}
