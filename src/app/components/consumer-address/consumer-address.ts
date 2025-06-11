import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-consumer-address',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './consumer-address.html',
  styleUrls: ['./consumer-address.css']
})
export class ConsumerAddress {
  @Input() group!: FormGroup;
}
