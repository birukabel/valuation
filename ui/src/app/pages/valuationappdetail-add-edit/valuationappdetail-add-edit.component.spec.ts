import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationappdetailAddEditComponent } from './valuationappdetail-add-edit.component';

describe('ValuationappdetailAddEditComponent', () => {
  let component: ValuationappdetailAddEditComponent;
  let fixture: ComponentFixture<ValuationappdetailAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuationappdetailAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuationappdetailAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
