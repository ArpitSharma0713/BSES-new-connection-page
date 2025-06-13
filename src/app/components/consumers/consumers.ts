import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConsumerAddress } from '../consumer-address/consumer-address';
import { ChangeDetectorRef } from '@angular/core';
import { PropertyWrite } from '@angular/compiler';
import { ConsumersSupply } from '../consumers-supply/consumers-supply';

@Component({
  selector: 'app-consumers',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,ConsumerAddress,ConsumersSupply],
  templateUrl: './consumers.html',
  styleUrls: ['./consumers.css']
})
export class Consumers {
  form!: FormGroup;
  photoPreview: string | null = null;
  signPreview: string | null = null;

  constructor(private fb: FormBuilder,private cd: ChangeDetectorRef) {
    this.form = this.fb.group({
      consumer: ["", Validators.required],
      photo: [null, Validators.required],
      sign: [null, Validators.required],
      property: ['', Validators.required],
      KhasraNo: ['',Validators.required],
      BlockNo: ['', Validators.required],
      floor: ['', Validators.required],
      premise: ['', Validators.required],
      other_detail: ['', Validators.required],
      street: ['', Validators.required],
      Area: ['', Validators.required],
      Landmark: ['', Validators.required],
      Landmark_Details: ['', Validators.required],
      City_Postal_Code: ['', Validators.required],
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
      this.cd.detectChanges();
    };
    reader.readAsDataURL(file);
  }
  get consumer() {
  return this.form.get('consumer');
}
  nextStep() {
    return alert("Next step is not implemented yet.");


  }
}