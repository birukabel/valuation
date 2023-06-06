import { Component, OnInit } from '@angular/core';
import { DistrictService } from 'src/app/services/district.service';
import { BranchService } from 'src/app/services/branch.service';
import { MatDialog } from '@angular/material/dialog';
import { District } from 'src/app/models/district.model';
import { Branch } from 'src/app/models/branch.model';

interface requesterdistrict {
  value?: string;
  viewValue?: string;
}

interface requestingBranch {
  value?: string;
  viewValue?: string;
}

interface districtName {
  name: string;
}

interface postponeOptions {
  value: string;
  viewValue: string;
}

interface assignengineer {
  value: string;
  viewValue: string;
}

interface postponedby {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  propertyowner: string;
  creditrequired: string;
  requesteddate: Date;
  requestedby: string;
  view: string;
}

export interface PeriodicElement2 {
  propertytype: string;
  valuationtype: string;
  propertyowner: string;
  buildingstatus: string;
  view: string;
}

export interface PeriodicElement3 {
  documenttype: string;
  filename: string;
  copyoriginal: string;
  createdby: string;
  createddate: Date;
  view: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { propertyowner: 'Biruk', creditrequired: '20000000', requesteddate: new Date(), requestedby: 'Mexico Branch', view: 'view' },
  { propertyowner: 'Zelalem', creditrequired: '10000000', requesteddate: new Date(), requestedby: 'Kera Branch', view: 'view' },
  { propertyowner: 'Getnet', creditrequired: '10000000', requesteddate: new Date(), requestedby: 'CIBD', view: 'view' },
  { propertyowner: 'Behailu', creditrequired: '30000000', requesteddate: new Date(), requestedby: 'MSME Retail', view: 'view' },
  { propertyowner: 'Biniam', creditrequired: '50000000', requesteddate: new Date(), requestedby: 'MSME Retail', view: 'view' },
  { propertyowner: 'Abay', creditrequired: '70000000', requesteddate: new Date(), requestedby: 'CIBD', view: 'view' },
  { propertyowner: 'Kirubel', creditrequired: '10000000', requesteddate: new Date(), requestedby: 'Jemo Branch', view: 'view' },
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  { propertytype: 'Commercial', valuationtype: 'Appeal', propertyowner: 'Biruk', buildingstatus: 'Completed', view: 'view' },
  { propertytype: 'Fuel/Gas Station', valuationtype: 'ReEstimation', propertyowner: 'Zelalem', buildingstatus: 'Under Construction', view: 'view' },
  { propertytype: 'Resedentail', valuationtype: 'Construction in progress', propertyowner: 'Biruk', buildingstatus: 'Completed', view: 'view' },
  { propertytype: 'Lodge', valuationtype: 'Foreclosure', propertyowner: 'Getenet', buildingstatus: 'Completed', view: 'view' },
  { propertytype: 'Vehicle', valuationtype: 'Foreclosure', propertyowner: 'Behailu', buildingstatus: 'Under Construction', view: 'view' },
  { propertytype: 'Construction Machineries', valuationtype: 'Appeal', propertyowner: 'Araya', buildingstatus: 'Under Construction', view: 'view' },
  { propertytype: 'Factory', valuationtype: 'ReEstimation', propertyowner: 'Biniam', buildingstatus: 'Completed', view: 'view' },
];

const ELEMENT_DATA3: PeriodicElement3[] = [
  { documenttype: 'Estimation Fee', filename: 'file1', copyoriginal: 'Original', createdby: 'Biruk', createddate: new Date(), view: 'view' },
  { documenttype: 'Approved Plan', filename: 'file2', copyoriginal: 'Original', createdby: 'Biruk', createddate: new Date(), view: 'view' },
  { documenttype: 'Bill Of Quantity', filename: 'file3', copyoriginal: 'Original', createdby: 'Biruk', createddate: new Date(), view: 'view' },
  { documenttype: 'Previous Valutaion Report', filename: 'file4', copyoriginal: 'Copy', createdby: 'Biruk', createddate: new Date(), view: 'view' },
  { documenttype: 'Estimation Fee', filename: 'file5', copyoriginal: 'Copy', createdby: 'Biruk', createddate: new Date(), view: 'view' },
  { documenttype: 'Bill Of Quantity', filename: 'file6', copyoriginal: 'Copy', createdby: 'Biruk', createddate: new Date(), view: 'view' },
  { documenttype: 'Previous Valutaion Report', filename: 'file7', copyoriginal: 'Original', createdby: 'Biruk', createddate: new Date(), view: 'view' },
];

@Component({
  selector: 'app-assignengineer',
  templateUrl: './assignengineer.component.html',
  styleUrls: ['./assignengineer.component.css']
})
export class AssignengineerComponent implements OnInit {
  allBranchesOfDistrict?: Branch[];
  allDistricts?: District[];/* = {
    id: 0,
    name:'',
    status:false,
    languageid:1,
    createdby: '',
    createddate:new Date(),
    updatedby:'',
    updateddate:new Date(),
  };*/

  constructor(
    private _dialog: MatDialog,
    private _districtService: DistrictService,
    private _branchService: BranchService
  ) { }

  ngOnInit(): void {
    this.getAllDistricts();
  }

  displayedColumns: string[] = ['applicantname', 'propertyowner', 'amountofcreditrequest', 'requestdate', 'requestedbyname', 'action'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = ['propertytype', 'valuationtype', 'propertyowner', 'buildingstatus', 'view'];
  dataSource2 = ELEMENT_DATA2;

  displayedColumns3: string[] = ['documenttype', 'filename', 'copyoriginal', 'createdby', 'createddate', 'view'];
  dataSource3 = ELEMENT_DATA3;

  /*
  district: requesterdistrict[] = [
    { value: 'Mexico', viewValue: 'Mexico' },
    { value: 'CIBD', viewValue: 'CIBD' },
    { value: 'MSME Retail', viewValue: 'MSME Retail' },
  ];*/

  districtNew: requesterdistrict[] = [];
  branchsPerDistrict: requestingBranch[] = [];

  districtNameData: districtName[] = [];

  ispostponed: postponeOptions[] = [
    { value: 'Yes', viewValue: 'Yes' },
    { value: 'No', viewValue: 'No' },
  ];

  engineer: assignengineer[] = [
    { value: 'Zelalem', viewValue: 'Zelalem' },
    { value: 'Biruk', viewValue: 'Biruk' },
    { value: 'Behailu', viewValue: 'Behailu' },
    { value: 'Araya', viewValue: 'Araya' },
  ];

  postponer: postponedby[] = [
    { value: 'Property Valuation', viewValue: 'Property Valuation' },
    { value: 'Branch Manager', viewValue: 'Branch Manager' },
    { value: 'CR Manager', viewValue: 'CF Manager' },
  ];

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  onDistrictChange(ob: any) {
    console.log('District has changed...');

    let selectedDistrict = ob.value;
    console.log(selectedDistrict);
    this.getBranchsByDistrict(selectedDistrict);

    //Fetch database data here and bind it to branch dropdownlist

    //let dropDownData = this.district.find((data: any) => data.viewValue === selectedDistrict);

    //this.d

  }

  getAllDistricts() {
    console.log('Call to get all districts');
    this._districtService.getAllDistricts().subscribe({
      next: (res) => {
        this.allDistricts = res;
        this.processDistrict(res);
      },
      error: console.log,
    });
    console.log('Api to getAllDistricts call has ended');
  }

  getBranchsByDistrict(selectedDistrict: string): void {
    console.log('Call to get branches by selected district');
    this._branchService.getBranchsByDistrict(selectedDistrict).subscribe({
      next: (res) => {
        this.allBranchesOfDistrict = res;
        this.processBranches(res);
      },
      error: console.log,
    });
  }

  processDistrict(districts: District[]): void {

    for (let i = 0; i < districts.length; i++) {
      this.districtNew.push({
        value: districts[i].name,
        viewValue: districts[i].name
      });
    }
    console.log('new data biniding with district');
    console.log(JSON.stringify(this.districtNew));
  }

  processBranches(branchesByDistrict: Branch[]): void {
    for (let i = 0; i < branchesByDistrict.length; i++) {
      this.branchsPerDistrict.push({
        value: branchesByDistrict[i].name,
        viewValue: branchesByDistrict[i].name
      })
    }
  }


  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  // */ Initially fill the selectedStates so it can be used in the for loop** 
  selectedStates = this.states; 

  // Receive user input and send to search method**
  onKey(event: any) {
  this.selectedStates = this.search((event.target).value);
}

  // Filter the states list and send back to populate the selectedStates**
  search(value: string) {
  let filter = value.toLowerCase();
  return this.states.filter(option => option.toLowerCase().startsWith(filter));
}

openEditForm(data: any) {
  /*
  const dialogRef = this._dialog.open(ValuationappdetailAddEditComponent, {
    data,
  });

  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        //this.getAllValuations();
      }
    },
  });*/
}

displayAttachedDocuments(data: any) {//Here display HTML Table for attached documents summary
  /*
  const appdetailId = data['applicationdetailid']
  const dialogRef = this._dialog.open(AttacheddocumentsAddEditComponent,{
    //data,
  }*/
  /*
  );
  console.log('selected application detail= ' + data['applicationdetailid']);
  this.getDocumentsByApplicationDetailId(data['applicationdetailid']);
  this.showTable = true//!this.showTable;
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getDocumentsByApplicationDetailId(appdetailId);
      }
    },
  });*/
}

}
