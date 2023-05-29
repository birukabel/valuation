import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteinspectionComponent } from './siteinspection.component';

describe('SiteinspectionComponent', () => {
  let component: SiteinspectionComponent;
  let fixture: ComponentFixture<SiteinspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteinspectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
