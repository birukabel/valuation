import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttacheddocumentsAddEditComponent } from './attacheddocuments-add-edit.component';

describe('AttacheddocumentsAddEditComponent', () => {
  let component: AttacheddocumentsAddEditComponent;
  let fixture: ComponentFixture<AttacheddocumentsAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttacheddocumentsAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttacheddocumentsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
