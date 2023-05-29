import { Component,  Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { CoreService } from '../../core/core.service';
import { ValuationService } from '../../services/valuation.service';

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
  constructor(
    private _fb: FormBuilder,
    private _valuationService: ValuationService,
    private _dialogRef: MatDialogRef<AttacheddocumentsAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    //private _coreService: CoreService
  ) {
    this.attachedDocumentsDetail = this._fb.group({
      //amountofcreditrequest: 0,
      filename: '',
      fileurl: '',
      applicationdetailid: 1,
      status: 1,
      orignalorcopy: '',
      remark: new FormControl('',[Validators.required]),
      createdby: '',
      createddate: new Date(),
      updatedby: '',
      updateddate: new Date(),
      documenttype: 1,
    });
  }

  ngOnInit(): void {
    this.attachedDocumentsDetail.patchValue(this.data);
  }

  originalcopy : documentoriginalcopy[]=[
    {value: 'orignal', viewValue: 'orignal'},
    {value: 'copy', viewValue: 'copy'},
  ];

  documenttype: typeofdocuments[]=[
    {value: '(LHC) Land Holding Certificate', viewValue: '(LHC) Land Holding Certificate'},
    {value: 'Valuation Fee Reciept', viewValue: 'Valuation Fee Reciept'},
    {value: 'Vehicle Ownership Certificate', viewValue: 'Vehicle Ownership Certificate'},
  ];

  get f(){
    return this.attachedDocumentsDetail.controls;
  }

  onFormSubmit() {
    if (this.attachedDocumentsDetail.valid) {
     if (this.data) {/*
        this._valuationService
          .updateValuation(this.data.id, this.valuationDetail.value)
          .subscribe({
            next: (val: any) => {
              //this._coreService.openSnackBar('Vaulation application updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });*/
      }
       else {/*
        this._valuationService.saveValuation(this.valuationDetail.value).subscribe({
          next: (val: any) => {
            //this._coreService.openSnackBar('Valuation saved successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      //}*/
    }
  }
}

}
