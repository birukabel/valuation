import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigenengineerAddEditComponent } from './assigenengineer-add-edit.component';

describe('AssigenengineerAddEditComponent', () => {
  let component: AssigenengineerAddEditComponent;
  let fixture: ComponentFixture<AssigenengineerAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigenengineerAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssigenengineerAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
