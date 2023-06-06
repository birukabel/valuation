import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { CoreService } from '../../core/core.service';
import { ValuationService } from '../../services/valuation.service';
import { AttacheddocumentsService } from 'src/app/services/attacheddocuments.service';


interface documentoriginalcopy {
  value: string;
  viewValue: string;
}

interface typeofdocuments {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-attacheddocuments-add-edit',
  templateUrl: './attacheddocuments-add-edit.component.html',
  styleUrls: ['./attacheddocuments-add-edit.component.css']
})
export class AttacheddocumentsAddEditComponent implements OnInit {



  attachedDocumentsDetail: FormGroup;
  items: string[] = [];
  constructor(
    private _fb: FormBuilder,
    private _valuationService: ValuationService,
    private _attachedDocumentsService: AttacheddocumentsService,
    private _dialogRef: MatDialogRef<AttacheddocumentsAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    //private _coreService: CoreService
  ) {
    this.attachedDocumentsDetail = this._fb.group({
      //amountofcreditrequest: 0,
      id: 1,
      filename: this.items[0],
      fileurl: '',
      applicationdetailid: 1,
      status: 1,
      orignalorcopy: '',
      remark: new FormControl('', [Validators.required]),
      createdby: '',
      createddate: new Date(),
      updatedby: '',
      updateddate: new Date(),
      documenttype: "",
    });
  }


  addItem(newItem: string) {
    this.items = [];
    this.items.push(newItem);
  }

  ngOnInit(): void {
    this.attachedDocumentsDetail.patchValue(this.data);
    console.log(this.data);
  }

  originalcopy: documentoriginalcopy[] = [
    { value: 'orignal', viewValue: 'orignal' },
    { value: 'copy', viewValue: 'copy' },
  ];

  documenttype: typeofdocuments[] = [
    { value: '(LHC) Land Holding Certificate', viewValue: '(LHC) Land Holding Certificate' },
    { value: 'Valuation Fee Reciept', viewValue: 'Valuation Fee Reciept' },
    { value: 'Vehicle Ownership Certificate', viewValue: 'Vehicle Ownership Certificate' },
  ];

  get f() {
    return this.attachedDocumentsDetail.controls;
  }

  onFormSubmit() {
    console.log('attached documents object'+ JSON.stringify(this.attachedDocumentsDetail.value));
    console.log('data object' + JSON.stringify(this.data));
    console.log('attached document validity' + JSON.stringify(this.attachedDocumentsDetail.valid));
    if (this.attachedDocumentsDetail.valid) {
      if (this.data) /*&& this.data.orignalorcopy*/ {
        //if (this.data.originalcopy) {
          console.log('call to edit attachement api end point');
          this._attachedDocumentsService
            .updateAttachedDocuments(this.data.id, this.attachedDocumentsDetail.value)
            .subscribe({
              next: (val2: any) => {
                //this._coreService.openSnackBar('Vaulation application updated!');
                console.log('Attached document updated');
                console.log(val2);
                this._dialogRef.close(true);
              },
              error: (err: any) => {
                console.error(err);
              },
            });
        //}
      }
      else {
        console.log('call to save attachment api end point');

        this._attachedDocumentsService.saveAttachedDocuments(this.attachedDocumentsDetail.value)
          .subscribe({
            next: (val2: any) => {
              console.log('Valuation detail saved');
              console.log(val2);
              this._dialogRef.close(true);
            },
          });
      }
    }
  }

}
