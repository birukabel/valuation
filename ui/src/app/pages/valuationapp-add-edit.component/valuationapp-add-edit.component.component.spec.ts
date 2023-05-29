import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationappAddEditComponentComponent } from './valuationapp-add-edit.component.component';

describe('ValuationappAddEditComponentComponent', () => {
  let component: ValuationappAddEditComponentComponent;
  let fixture: ComponentFixture<ValuationappAddEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuationappAddEditComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuationappAddEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
