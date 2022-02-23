import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeeheadderComponent } from './cofeeheadder.component';

describe('CofeeheadderComponent', () => {
  let component: CofeeheadderComponent;
  let fixture: ComponentFixture<CofeeheadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofeeheadderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CofeeheadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
