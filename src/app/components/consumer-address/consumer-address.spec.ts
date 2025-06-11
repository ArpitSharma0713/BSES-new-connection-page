import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerAddress } from './consumer-address';

describe('ConsumerAddress', () => {
  let component: ConsumerAddress;
  let fixture: ComponentFixture<ConsumerAddress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumerAddress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerAddress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
