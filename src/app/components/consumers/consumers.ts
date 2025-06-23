import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
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
  cameraOpen = false;
  captureType: 'photo' | 'signature' = 'photo';
  captured = false;
  mediaStream: MediaStream | null = null;

  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;


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
      Nearby: ['', Validators.required],
      Division: ['', Validators.required],
      RoofTop: ['', Validators.required],
    });
  }
  async openCamera(type: 'photo' | 'signature') {
    this.captureType = type;
    this.captured = false;
    this.cameraOpen = true;
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setTimeout(() => { 
        this.video.nativeElement.srcObject = this.mediaStream!;
        this.video.nativeElement.play();
      });
    } catch (err) {
      alert('Unable to access camera: ' + err);
      this.closeCamera();
    }
  }

  snap() {
    const videoEl = this.video.nativeElement;
    const canvasEl = this.canvas.nativeElement;
    canvasEl.width = videoEl.videoWidth;
    canvasEl.height = videoEl.videoHeight;
    canvasEl.getContext('2d')!.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height);
    this.captured = true;
    videoEl.pause();
  }

  retake() {
    this.captured = false;
    this.video.nativeElement.play();
  }

  saveCapture() {
    const dataUrl = this.canvas.nativeElement.toDataURL('image/png');
    if (this.captureType === 'photo') {
      this.photoPreview = dataUrl;
      this.form.patchValue({ photo: dataUrl });
    } else {
      this.signPreview = dataUrl;
      this.form.patchValue({ sign: dataUrl });
    }
    this.closeCamera();
  }

  closeCamera() {
    this.cameraOpen = false;
    this.captured = false;
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null;
    }
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
  triggerCapture(inputId: string) {
  const input = document.getElementById(inputId) as HTMLInputElement;
  if (input) input.click();
}

}