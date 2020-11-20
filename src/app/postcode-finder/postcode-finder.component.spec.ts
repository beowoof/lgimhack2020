import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcodeFinderComponent } from './postcode-finder.component';

describe('PostcodeFinderComponent', () => {
  let component: PostcodeFinderComponent;
  let fixture: ComponentFixture<PostcodeFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcodeFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcodeFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
