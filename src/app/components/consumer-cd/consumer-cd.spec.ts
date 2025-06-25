import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerCD } from './consumer-cd';

describe('ConsumerCD', () => {
  let component: ConsumerCD;
  let fixture: ComponentFixture<ConsumerCD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumerCD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerCD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
