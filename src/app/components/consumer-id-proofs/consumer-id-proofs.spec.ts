import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerIDProofs } from './consumer-id-proofs';

describe('ConsumerIDProofs', () => {
  let component: ConsumerIDProofs;
  let fixture: ComponentFixture<ConsumerIDProofs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumerIDProofs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerIDProofs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
