import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeelogoComponent } from './cofeelogo.component';

describe('CofeelogoComponent', () => {
  let component: CofeelogoComponent;
  let fixture: ComponentFixture<CofeelogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofeelogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CofeelogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
