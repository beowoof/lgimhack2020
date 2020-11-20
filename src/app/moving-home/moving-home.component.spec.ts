import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingHomeComponent } from './moving-home.component';

describe('MovingHomeComponent', () => {
  let component: MovingHomeComponent;
  let fixture: ComponentFixture<MovingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
