import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCheckComponent } from './investment-check.component';

describe('InvestmentCheckComponent', () => {
  let component: InvestmentCheckComponent;
  let fixture: ComponentFixture<InvestmentCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
