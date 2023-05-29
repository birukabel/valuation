import { Component, ViewChild } from '@angular/core';
import { ValuationappdetailAddEditComponent } from '../valuationappdetail-add-edit/valuationappdetail-add-edit.component';
import { AttacheddocumentsAddEditComponent } from '../attacheddocuments-add-edit/attacheddocuments-add-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ValuationService } from 'src/app/services/valuation.service';
import { ApplicationdetailService } from 'src/app/services/applicationdetail.service';


/*
interface valuationpropertytype {
  value: string;
  viewValue: string;
}

interface requireEngineer{
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

interface typeofdocuments {
  value: string;
  viewValue: string;
}

interface documentoriginalcopy {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  propertytype: string;
  valuationtype: string;
  propertyowner: string;
  buildingstatus: string;
  view: string;
}

export interface PeriodicElement2 {
  documenttype: string;
  filename: string;
  copyoriginal: string;
  createdby: string;
  createddate: Date;
  view:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {propertytype: 'Residential', valuationtype: 'New', propertyowner: 'biruk',buildingstatus: 'completed', view: 'view'},
  {propertytype: 'Fuel station', valuationtype: 'Under Construction', propertyowner: 'araya',buildingstatus: 'underconstruction', view: 'view'},
  {propertytype: 'Vehcile', valuationtype: 'ReEstimation', propertyowner: 'zelalem',buildingstatus: 'completed', view: 'view'},
  {propertytype: 'Residential', valuationtype: 'Under Construction', propertyowner: 'getenet',buildingstatus: 'underconstruction', view: 'view'},
  {propertytype: 'Vehcile', valuationtype: 'Under Construction', propertyowner: 'behailu',buildingstatus: 'completed', view: 'view'},
  {propertytype: 'Fuel station', valuationtype: 'ReEstimation', propertyowner: 'biniam',buildingstatus: 'underconstruction', view: 'view'},
  {propertytype: 'Residential', valuationtype: 'ReEstimation', propertyowner: 'behailu',buildingstatus: 'completed', view: 'view'},
  {propertytype: 'Fuel station', valuationtype: 'New', propertyowner: 'biruk',buildingstatus: 'underconstruction', view:'view'},
  {propertytype: 'Vehcile', valuationtype: 'Under Construction', propertyowner: 'Araya',buildingstatus: 'completed', view: 'view'},
  {propertytype: 'Residential', valuationtype: 'ReEstimation', propertyowner: 'biruk',buildingstatus: 'underconstruction', view: 'view'},
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  {documenttype: 'Residential', filename: 'file3', copyoriginal: 'copy', createdby: 'biruk',createddate:new Date(),view:'view'},
  {documenttype: 'Fuel station', filename: 'file2', copyoriginal: 'copy', createdby: 'biruk',createddate:new Date(),view:'view'},
  {documenttype: 'Vehcile', filename: 'file4', copyoriginal: 'copy', createdby: 'biruk',createddate:new Date(),view:'view'},
  {documenttype: 'Residential', filename: 'file1', copyoriginal: 'copy', createdby: 'biruk',createddate:new Date(),view:'view'},
  {documenttype: 'Vehcile', filename: 'file5', copyoriginal: 'original', createdby: 'biruk',createddate:new Date(),view:'view'},
  {documenttype: 'Fuel station', filename: 'file6', copyoriginal: 'original', createdby: 'biruk',createddate:new Date(),view:'view'},
  {documenttype: 'Residential', filename: 'file5', copyoriginal: 'original', createdby: 'biruk',createddate:new Date(),view:'view'},
  {documenttype: 'Fuel station', filename: 'file8', copyoriginal: 'original', createdby:'biruk',createddate:new Date(),view:'view'},
  {documenttype: 'Vehcile', filename: 'file9', copyoriginal: 'original', createdby: 'biruk',createddate:new Date(),view:'view'},
  {documenttype: 'Residential', filename: 'file10', copyoriginal: 'original', createdby: 'biruk',createddate:new Date(),view:'view'},
];*/

@Component({
  selector: 'app-applicationdetail',
  templateUrl: './applicationdetail.component.html',
  styleUrls: ['./applicationdetail.component.css']
})
export class ApplicationdetailComponent {
  showTable: boolean = false;
  showDetailId: boolean = true;
  displayedColumns: string[] = [
    'applicantname',
    'requiredengineer',
    'propertyowner',
    'typeofproperty',
    'valuationtype',
    'action',
  ];

  displayedColumns2: string[] = [ 
    'documenttype', 
    'filename',
    'copyoriginal',
    'createdby',
    'createddate',
    'view'
  ];

  constructor(
    private _dialog: MatDialog,
    private _valuationService: ValuationService,
    private _aplicationdetailService: ApplicationdetailService
  ) {}

  dataSource!: MatTableDataSource<any>;

  dataSource2!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //displayedColumns: string[] = [ 'propertytype', 'valuationtype', 'propertyowner','buildingstatus','view'];
  //dataSource = ELEMENT_DATA;

  /*
  
  dataSource2 = ELEMENT_DATA2;

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

  required_engineer: requireEngineer[]=[
    {value: 'Civil Engineer', viewValue: 'Civil Engineer'},
    {value: 'Mechanical Engineer', viewValue: 'Mechanical Engineer'},
    {value: 'Civil and Mechanical Engineer', viewValue: 'Civil and Mechanical Engineer'},
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

  documenttype: typeofdocuments[]=[
    {value: '(LHC) Land Holding Certificate', viewValue: '(LHC) Land Holding Certificate'},
    {value: 'Valuation Fee Reciept', viewValue: 'Valuation Fee Reciept'},
    {value: 'Vehicle Ownership Certificate', viewValue: 'Vehicle Ownership Certificate'},
  ];

  originalcopy : documentoriginalcopy[]=[
    {value: 'orignal', viewValue: 'orignal'},
    {value: 'copy', viewValue: 'copy'},
  ];*/

  documentrequired: any;
  onTypeOfPropertyChange(ob: any) {
    this.documentrequired = 'You must upload two documents for this application, Valuation Fee Receipt and Verified copy of Land Holding Certificate!';
    console.log('Type of property has changed...');
    if(ob.value == 'Vehicle')
    {
      this.documentrequired = 'You must upload two documents for this application, Valuation Fee Receipt and Vehicle Ownership Certificate!';
    }
    
    let selectedEngineer = ob.value;
    console.log(selectedEngineer);
  }

  openAddEditForm(data: any) {

    /*
    let applicantname : string = (<HTMLInputElement>document.getElementById("applicantname")).value;
    this.getAllValuationDetailByApplicant(applicantname);*/
    
    const dialogRef = this._dialog.open(ValuationappdetailAddEditComponent,{data});
    
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          //this.getAllValuations();
        }
      },
    });
    /*const dialogRef = this._dialog.open(ValuationappdetailAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          //this.getAllValuations();
        }
      },
    });*/
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(ValuationappdetailAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          //this.getAllValuations();
        }
      },
    });
  }

  displayAttachedDocuments(data: any) {//Here display HTML Table for attached documents summary
    const dialogRef = this._dialog.open(AttacheddocumentsAddEditComponent);
    this.showTable = !this.showTable;
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          //this.getAllValuations();
        }
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    /*this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }*/
  }

 
  getAllValuationDetailByApplicant(event: any) {
    console.log("call to get vaulation by applicant");
    this._aplicationdetailService.getValuationApplicationDetailByApplicantName((event.target).value).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
    console.log('Api call has ended');
  }
}
