import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Form, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-consumer-id-proofs',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './consumer-id-proofs.html',
  styleUrl: './consumer-id-proofs.css'
})
export class ConsumerIDProofs {
  @Input() group!: FormGroup;
  idfilePreview: string | null = null;
  ownershipPreview: string | null = null;
  constructor(private cd: ChangeDetectorRef) { 
    if (!this.group) {
      this.group = new FormGroup({});
    }
    
  }
  
  filechange(event: Event, type: "idFile" | "ownershipFile") {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length == 0) {
      return;
    }
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {

      if (type == "idFile") this.idfilePreview = reader.result as string;
      if (type == "ownershipFile") this.ownershipPreview = reader.result as string;
      this.group.patchValue({ [type]: file });
      this.cd.detectChanges();
    };
    reader.readAsDataURL(file);
  }
}
