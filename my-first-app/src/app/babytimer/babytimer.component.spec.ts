import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabytimerComponent } from './babytimer.component';

describe('BabytimerComponent', () => {
  let component: BabytimerComponent;
  let fixture: ComponentFixture<BabytimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabytimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabytimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
