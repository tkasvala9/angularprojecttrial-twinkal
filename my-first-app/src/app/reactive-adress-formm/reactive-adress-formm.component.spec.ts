import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAdressFormmComponent } from './reactive-adress-formm.component';

describe('ReactiveAdressFormmComponent', () => {
  let component: ReactiveAdressFormmComponent;
  let fixture: ComponentFixture<ReactiveAdressFormmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAdressFormmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAdressFormmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
