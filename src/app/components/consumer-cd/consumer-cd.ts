import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-consumer-cd',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './consumer-cd.html',
  styleUrl: './consumer-cd.css'
})
export class ConsumerCD {
  @Input() group!: FormGroup;

}
