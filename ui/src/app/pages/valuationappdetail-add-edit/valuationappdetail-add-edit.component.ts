import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { CoreService } from '../../core/core.service';
import { ValuationService } from '../../services/valuation.service';
import { AttacheddocumentsService } from 'src/app/services/attacheddocuments.service';
import { ApplicationdetailService } from 'src/app/services/applicationdetail.service';

interface requireEngineer{
  value: string;
  viewValue: string;
}

interface valuationpropertytype {
  value: string;
  viewValue: string;
}

interface valuationtypelookup {
  value: string;
  viewValue: string;
}

interface statusofbuilding {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-valuationappdetail-add-edit',
  templateUrl: './valuationappdetail-add-edit.component.html',
  styleUrls: ['./valuationappdetail-add-edit.component.css']
})

export class ValuationappdetailAddEditComponent implements OnInit {
  valuationDetail: FormGroup;
  appidshow: boolean = true;
  attachedDocuments: FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private _fb2:FormBuilder,
    private _valuationService: ValuationService,
    private _applicationDetailService: ApplicationdetailService,
    private _attchedDocumentsService:AttacheddocumentsService,
    private _dialogRef: MatDialogRef<ValuationappdetailAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    //private _coreService: CoreService
  ) {
    this.valuationDetail = this._fb.group({
      //amountofcreditrequest: 0,
      applicationdetailid: 1,//new FormControl(this.data.applicationdetailid),
      applicationid: 1,
      propertytypeid: '',//new FormControl(1),
      valuationtypeid: '',//new FormControl(1),
      quantity: new FormControl(''),//new FormControl(0,[Validators.required]),
      addressofproperty: '',//new FormControl(''),//new FormControl('',[Validators.required]),
      requiredengineer: '',//new FormControl(''),
      buildingstatus: '',//new FormControl(1),
      //createdby: 'Biruk',//new FormControl(''),
      //createddate: new Date(),
     // updatedby: 'Biruk', //new FormControl(''),
      //updateddate: new Date(),
      propertyowner: new FormControl(''),
      specificaddress: new FormControl(''),
      remark: new FormControl(''),
    });

    this.attachedDocuments = this._fb2.group({    
      filename: '',
      fileurl: '',
      applicationdetailid: 1,
      status: 1,
      orignalorcopy: '',
      remark: '',
      createdby: '',
      createddate: new Date(),
      updatedby: '',
      updateddate: new Date(),
      documenttype: 1,
    });
  }

  ngOnInit(): void {
    this.valuationDetail.patchValue(this.data);
    console.log(this.data.applicationid);
  }

  onFormSubmit() {
    if (this.valuationDetail.valid) {
     if (this.data.quantity) {
        console.log('call to update valuation detail');
        this._applicationDetailService
          .updateValuationApplication(this.data.applicationdetailid, this.valuationDetail.value)
          .subscribe({
            next: (val2: any) => {
              //this._coreService.openSnackBar('Vaulation application updated!');
              console.log('Valuation detail updated');
              console.log(val2);
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._valuationService.saveValuationApplicationDetail(this.valuationDetail.value)
        .subscribe({
          next: (val2: any) => {
            console.log('Valuation detail saved');
            console.log(val2);
            /*
            this._attchedDocumentsService.saveAttachedDocuments(this.attachedDocuments.value).subscribe({
              next: (val2: any) => {
                console.log('Attached documents saved');
                console.log(val2);
              },
              error:(err2:any) => {
                console.log(err2);
              }
            });*/
            //this._coreService.openSnackBar('Valuation saved successfully');
          
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });      
    }
  }
}

  required_engineer: requireEngineer[]=[
    {value: 'Civil Engineer', viewValue: 'Civil Engineer'},
    {value: 'Mechanical Engineer', viewValue: 'Mechanical Engineer'},
    {value: 'Civil and Mechanical Engineer', viewValue: 'Civil and Mechanical Engineer'},
  ];

  valuation_property_type: valuationpropertytype[] = [
    {value: 'Residential bldg', viewValue: 'Residential bldg'},
    {value: 'Commercial bldg', viewValue: 'Commercial bldg'},
    {value: 'Industrial/factory bldg', viewValue: 'Industrial/factory bldg'},
    {value: 'Fuel/Gas Station bldg', viewValue: 'Fuel/Gas Station bldg'},
    {value: 'School/Collage bldg', viewValue: 'School/Collage bldg'},
    {value: 'Resort/Lodge bldg', viewValue: 'Resort/Lodge bldg'},
    {value: 'Vehicle', viewValue: 'Vehicle'},
    {value: 'Construction Machineries', viewValue: 'Construction Machineries'},
  ];

  valuation_type : valuationtypelookup[]=[
    {value: 'new', viewValue: 'new'},
    {value: 'appeal', viewValue: 'appeal'},
    {value: 'foreclosure', viewValue: 'foreclosure'},
  ];

  buildingstatus: statusofbuilding[]=[
    {value: 'completed', viewValue: 'completed'},
    {value: 'underconstruction', viewValue: 'underconstruction'},
  ];

  get f(){
    return this.valuationDetail.controls;
  }

  documentrequired: any;
  onTypeOfPropertyChange(ob: any) {
    this.documentrequired = 'You must upload two documents for this application, <br/> Valuation Fee Receipt and Verified copy of Land Holding Certificate!';
    console.log('Type of property has changed...');
    if(ob.value == 'Vehicle')
    {
      this.documentrequired = 'You must upload two documents for this application, <br/> Valuation Fee Receipt and Vehicle Ownership Certificate!';
    }
    
    let selectedEngineer = ob.value;
    console.log(selectedEngineer);
  }
}
