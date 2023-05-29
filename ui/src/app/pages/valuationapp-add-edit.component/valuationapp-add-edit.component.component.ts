import { Component,  Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { CoreService } from '../../core/core.service';
import { ValuationService } from '../../services/valuation.service';


@Component({
  selector: 'app-valuationapp-add-edit.component',
  templateUrl: './valuationapp-add-edit.component.component.html',
  styleUrls: ['./valuationapp-add-edit.component.component.css']
})
export class ValuationappAddEditComponentComponent implements OnInit {
  valuationForm: FormGroup;
 
  constructor(
    private _fb: FormBuilder,
    private _valuationService: ValuationService,
    private _dialogRef: MatDialogRef<ValuationappAddEditComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    //private _coreService: CoreService
  ) {
    this.valuationForm = this._fb.group({
      //amountofcreditrequest: 0,
      requestedby: 1,
      requestedbyname: '',
      //applicantname: '',
      applicationstatus: 1,
      //remark: '',
      requestdate:new Date(),

      amountofcreditrequest: new FormControl('', [Validators.required]),
      applicantname: new FormControl('', [Validators.required]),
      remark: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.valuationForm.patchValue(this.data);
    
  }

  onFormSubmit() {
    if (this.valuationForm.valid) {
     if (this.data) {
        this._valuationService
          .updateValuation(this.data.id, this.valuationForm.value)
          .subscribe({
            next: (val: any) => {
              //this._coreService.openSnackBar('Vaulation application updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._valuationService.saveValuation(this.valuationForm.value).subscribe({
          next: (val: any) => {
            //this._coreService.openSnackBar('Valuation saved successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      //}
    }
  }
}

get f(){
  return this.valuationForm.controls;
}

/*
this.valuationForm = new FormGroup({
  amountofcreditrequest: new FormControl('', [Validators.required]),
  applicantname: new FormControl('', [Validators.required]),
  remark: new FormControl('', [Validators.required])
});




submit(){
  console.log(this.form.value);
}*/


}
