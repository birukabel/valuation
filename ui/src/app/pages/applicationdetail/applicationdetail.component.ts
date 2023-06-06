import { Component, ViewChild } from '@angular/core';
import { ValuationappdetailAddEditComponent } from '../valuationappdetail-add-edit/valuationappdetail-add-edit.component';
import { AttacheddocumentsAddEditComponent } from '../attacheddocuments-add-edit/attacheddocuments-add-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ValuationService } from 'src/app/services/valuation.service';
import { ApplicationdetailService } from 'src/app/services/applicationdetail.service';
import { AttacheddocumentsService } from 'src/app/services/attacheddocuments.service';


@Component({
  selector: 'app-applicationdetail',
  templateUrl: './applicationdetail.component.html',
  styleUrls: ['./applicationdetail.component.css']
})
export class ApplicationdetailComponent {
  showTable: boolean = false;
  showDetailId: boolean = true;
  filterValue: string = '';
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
    'orignalorcopy',
    'createdby',
    'createddate',
    'edit'
  ];

  constructor(
    private _dialog: MatDialog,
    private _valuationService: ValuationService,
    private _aplicationdetailService: ApplicationdetailService,
    private _attachedDocumentSErvice: AttacheddocumentsService
  ) {}

  dataSource!: MatTableDataSource<any>;

  dataSource2!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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

  openDocumentEditForm(data: any){
    const dialogRef = this._dialog.open(AttacheddocumentsAddEditComponent,{
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
    const appdetailId = data['applicationdetailid']
    const dialogRef = this._dialog.open(AttacheddocumentsAddEditComponent/*,{
      data,
    }*/
    
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
    });
  }

  applyFilter(event: Event) {
     this.filterValue = (event.target as HTMLInputElement).value;
    /*this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }*/
  }

 
  getAllValuationDetailByApplicant(event: any) {
    console.log("call to get vaulation by applicant");
    if(event)
    {
      this.filterValue = (event.target).value;
    }
    
    this._aplicationdetailService.getValuationApplicationDetailByApplicantName(this.filterValue).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
    console.log('Api call has ended');
  }

  getDocumentsByApplicationDetailId(data: any){
    console.log('Call to get documents by application detail id');
    this._attachedDocumentSErvice.getDocumentsByApplicationDetailId(data).subscribe({
      next: (res) => {
        this.dataSource2 = new MatTableDataSource(res);
        this.dataSource2.sort = this.sort;
        this.dataSource2.paginator = this.paginator;
      },
      error: console.log,
    });
    console.log('Api to getDocumentsByApplicationDetailId call has ended');
  }
}
