import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ValuationappAddEditComponentComponent } from '../valuationapp-add-edit.component/valuationapp-add-edit.component.component';
import { ValuationService } from 'src/app/services/valuation.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, Validators} from '@angular/forms';


/*
export interface PeriodicElement {
  propertyowner: string;
  requestedby: string;
  creditrequested: number;
  requestdate: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {requestedby: 'CIBD', propertyowner: 'Biruk', creditrequested: 100000000, requestdate: new Date()},
  {requestedby: 'CIBD', propertyowner: 'Zelalem', creditrequested: 30000000, requestdate: new Date()},
  {requestedby: 'CIBD', propertyowner: 'Abebe', creditrequested: 20000000, requestdate: new Date()},
  {requestedby: 'CIBD', propertyowner: 'Ayele', creditrequested: 4000000, requestdate: new Date()},
  {requestedby: 'CIBD', propertyowner: 'Araya', creditrequested: 50000000, requestdate: new Date()},
  {requestedby: 'CIBD', propertyowner: 'Bogale', creditrequested: 12000000, requestdate: new Date()},
  {requestedby: 'CIBD', propertyowner: 'Biniam', creditrequested: 8000000, requestdate: new Date()},
  {requestedby: 'CIBD', propertyowner: 'Behailu', creditrequested: 90000000, requestdate:new Date()},
  {requestedby: 'CIBD', propertyowner: 'Getenet', creditrequested: 18000000, requestdate: new Date()},
  {requestedby: 'CIBD', propertyowner: 'Kirubel', creditrequested: 13000000, requestdate: new Date()},
];*/

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements OnInit {

  displayedColumns: string[] = [
    'amountofcreditrequest',
    'requestedbyname',
    'applicantname',
    'requestdate',
    'remark',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _valuationService: ValuationService
  ) {}

  /*
  valutaion_application: valuationapplication = {
    propertyowner: '',
    requestedby: '',
    requestdate: '',
    amountofcreditrequest:0,
    remark:'',
    requestedbyname:'',
    applicationstatus:0   
  };
  submitted = false;

  constructor(private valuationapplicationservice: ValuationApplicationService) { }

  saveValutaionApplication(): void {
    const data = {
      propertyowner: this.valutaion_application.propertyowner,
      requestedby:this.valutaion_application.requestedby,
      requestdate:this.valutaion_application.requestdate,
      amountofcreditrequest:this.valutaion_application.amountofcreditrequest,
      remark:this.valutaion_application.remark,
      requestedbyname:this.valutaion_application.requestedbyname,
      applicationstatus:this.valutaion_application.applicationstatus,
    };
    

    this.valuationapplicationservice.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newValutaionApplication(): void {
    this.submitted = false;
    this.valutaion_application = {
      propertyowner: '',
      requestedby: '',
      requestdate: '',
      amountofcreditrequest:0,
      remark:'',
      requestedbyname:'',
      applicationstatus:0  
    };
  }

  displayedColumns: string[] = [ 'propertyowner', 'creditrequested', 'requestdate','requestedby'];
  dataSource = ELEMENT_DATA;*/

  ngOnInit(): void {
    this.getAllValuations();
  }

  /*
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(ValuationappAddEditComponentComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllValuations();
        }
      },
    });
  }*/

  openAddEditValuationForm() {
    const dialogRef = this._dialog.open(ValuationappAddEditComponentComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllValuations();
        }
      },
    });
  }


  getAllValuations() {
    console.log("call to get all vaulation");
    this._valuationService.getValuationApplication().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /*
  deleteEmployee(id: number) {
    this._valuationService.deleteEmployee(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Valuation application deleted!', 'done');
        this.getAllValuations();
      },
      error: console.log,
    });
  }*/

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(ValuationappAddEditComponentComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllValuations();
        }
      },
    });
  }
}
