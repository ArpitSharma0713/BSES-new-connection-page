import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-consumers-supply',
  imports: [ReactiveFormsModule,FormsModule, CommonModule],
  templateUrl: './consumers-supply.html',
  styleUrl: './consumers-supply.css'
})
export class ConsumersSupply {
  @Input() group!: FormGroup;

}
