import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumersSupply } from './consumers-supply';

describe('ConsumersSupply', () => {
  let component: ConsumersSupply;
  let fixture: ComponentFixture<ConsumersSupply>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumersSupply]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumersSupply);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
