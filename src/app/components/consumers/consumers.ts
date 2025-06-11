import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConsumerAddress } from '../consumer-address/consumer-address';

@Component({
  selector: 'app-consumers',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,ConsumerAddress],
  templateUrl: './consumers.html',
  styleUrls: ['./consumers.css']
})
export class Consumers {
  form!: FormGroup;
  photoPreview: string | null = null;
  signPreview: string | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      consumer: ["", Validators.required],
      photo: [null, Validators.required],
      sign: [null, Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      postalCode: ['', Validators.required]
    });
  }

  filechange(event: Event, type: "photo" | "signature") {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length == 0) {
      return;
    }
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (type == "photo") this.photoPreview = reader.result as string;
      if (type == "signature") this.signPreview = reader.result as string;
      this.form.patchValue({ [type]: file });
    };
    reader.readAsDataURL(file);
  }
  get consumer() {
  return this.form.get('consumer');
}
  nextStep() {
    return console.log("working");
    alert("Next step functionality is not implemented yet.");

  }
}