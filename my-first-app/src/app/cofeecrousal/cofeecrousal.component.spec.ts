import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeecrousalComponent } from './cofeecrousal.component';

describe('CofeecrousalComponent', () => {
  let component: CofeecrousalComponent;
  let fixture: ComponentFixture<CofeecrousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofeecrousalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CofeecrousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
