import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ingredient } from 'src/app/_models/ingredient';

@Component({
  selector: 'app-ingredient-modal',
  templateUrl: './ingredient-modal.component.html',
  styleUrls: ['./ingredient-modal.component.css']
})
export class IngredientModalComponent implements OnInit {

  @Input() public ingredient: Ingredient;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.ingredient);
    this.passEntry.emit(this.ingredient);
    this.activeModal.close(this.ingredient);
  }

}
