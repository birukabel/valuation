import { Component } from '@angular/core';

interface requesterdistrict {
  value: string;
  viewValue: string;
}

interface postponeOptions {
  value: string;
  viewValue: string;
}

interface assignengineer {
  value: string;
  viewValue: string;
}

interface postponedby{
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
  createddate:Date;
  view: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {propertyowner: 'Biruk', creditrequired: '20000000', requesteddate: new Date(),requestedby: 'Mexico Branch', view: 'view'},
  {propertyowner: 'Zelalem', creditrequired: '10000000', requesteddate: new Date(),requestedby: 'Kera Branch', view: 'view'},
  {propertyowner: 'Getnet', creditrequired: '10000000', requesteddate: new Date(),requestedby: 'CIBD', view: 'view'},
  {propertyowner: 'Behailu', creditrequired: '30000000', requesteddate: new Date(),requestedby: 'MSME Retail', view: 'view'},
  {propertyowner: 'Biniam', creditrequired: '50000000', requesteddate: new Date(),requestedby: 'MSME Retail', view: 'view'},
  {propertyowner: 'Abay', creditrequired: '70000000', requesteddate: new Date(),requestedby: 'CIBD', view: 'view'},
  {propertyowner: 'Kirubel', creditrequired: '10000000', requesteddate: new Date(),requestedby: 'Jemo Branch', view: 'view'},
  ];

const ELEMENT_DATA2: PeriodicElement2[] = [
    {propertytype: 'Commercial', valuationtype: 'Appeal', propertyowner: 'Biruk',buildingstatus: 'Completed', view: 'view'},
    {propertytype: 'Fuel/Gas Station', valuationtype: 'ReEstimation', propertyowner: 'Zelalem',buildingstatus: 'Under Construction', view: 'view'},
    {propertytype: 'Resedentail', valuationtype: 'Construction in progress', propertyowner: 'Biruk',buildingstatus: 'Completed', view: 'view'},
    {propertytype: 'Lodge', valuationtype: 'Foreclosure', propertyowner: 'Getenet',buildingstatus: 'Completed', view: 'view'},
    {propertytype: 'Vehicle', valuationtype: 'Foreclosure', propertyowner: 'Behailu',buildingstatus: 'Under Construction', view: 'view'},
    {propertytype: 'Construction Machineries', valuationtype: 'Appeal', propertyowner: 'Araya',buildingstatus: 'Under Construction', view: 'view'},
    {propertytype: 'Factory', valuationtype: 'ReEstimation', propertyowner: 'Biniam',buildingstatus: 'Completed', view: 'view'},
    ];

const ELEMENT_DATA3: PeriodicElement3[] = [
    {documenttype: 'Estimation Fee', filename: 'file1', copyoriginal: 'Original',createdby: 'Biruk',createddate:new Date(), view: 'view'},
    {documenttype: 'Approved Plan', filename: 'file2', copyoriginal: 'Original',createdby: 'Biruk',createddate:new Date(), view: 'view'},
    {documenttype: 'Bill Of Quantity', filename: 'file3', copyoriginal: 'Original',createdby: 'Biruk',createddate:new Date(), view: 'view'},
    {documenttype: 'Previous Valutaion Report', filename: 'file4', copyoriginal: 'Copy',createdby: 'Biruk',createddate:new Date(), view: 'view'},
    {documenttype: 'Estimation Fee', filename: 'file5', copyoriginal: 'Copy',createdby: 'Biruk',createddate:new Date(), view: 'view'},
    {documenttype: 'Bill Of Quantity', filename: 'file6', copyoriginal: 'Copy',createdby: 'Biruk',createddate:new Date(), view: 'view'},
    {documenttype: 'Previous Valutaion Report', filename: 'file7', copyoriginal: 'Original',createdby: 'Biruk',createddate:new Date(), view: 'view'},
    ];

@Component({
  selector: 'app-assignengineer',
  templateUrl: './assignengineer.component.html',
  styleUrls: ['./assignengineer.component.css']
})
export class AssignengineerComponent {
  displayedColumns: string[] = [ 'propertyowner', 'creditrequired', 'requesteddate','requestedby','view'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = [ 'propertytype', 'valuationtype', 'propertyowner','buildingstatus','view'];
  dataSource2 = ELEMENT_DATA2;

  displayedColumns3: string[] = [ 'documenttype', 'filename', 'copyoriginal','createdby','createddate','view'];
  dataSource3 = ELEMENT_DATA3;

  district: requesterdistrict[]=[
    {value: 'Mexico', viewValue: 'Mexico'},
    {value: 'CIBD', viewValue: 'CIBD'},
    {value: 'MSME Retail', viewValue: 'MSME Retail'},
  ];

  ispostponed: postponeOptions[]=[
    {value: 'Yes', viewValue: 'Yes'},
    {value: 'No', viewValue: 'No'},
  ];

  engineer: assignengineer[]=[
    {value: 'Zelalem', viewValue: 'Zelalem'},
    {value: 'Biruk', viewValue: 'Biruk'},
    {value: 'Behailu', viewValue: 'Behailu'},
    {value: 'Araya', viewValue: 'Araya'},
  ];

  postponer: postponedby[]=[
    {value: 'Property Valuation', viewValue: 'Property Valuation'},
    {value: 'Branch Manager', viewValue: 'Branch Manager'},
    {value: 'CR Manager', viewValue: 'CF Manager'},
  ];

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
