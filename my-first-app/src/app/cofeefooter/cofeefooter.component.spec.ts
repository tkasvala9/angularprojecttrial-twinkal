import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeefooterComponent } from './cofeefooter.component';

describe('CofeefooterComponent', () => {
  let component: CofeefooterComponent;
  let fixture: ComponentFixture<CofeefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofeefooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CofeefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
