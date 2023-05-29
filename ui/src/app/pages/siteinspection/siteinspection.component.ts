import { Component } from '@angular/core';

interface requesterdistrict {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  insepectiondate: Date;
  assignedengineer: string;
  sitetown: string;
  view: string;
}

export interface PeriodicElement2 {
  filename: string;
  createddate: Date;
  createdby: string;
  view: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {insepectiondate: new Date(), assignedengineer: 'Zelalem', sitetown: 'Mexico Area', view: 'view'},
  {insepectiondate: new Date(), assignedengineer: 'Zelalem', sitetown: 'Kera Area', view: 'view'},
  {insepectiondate: new Date(), assignedengineer: 'Zelalem', sitetown: 'Gelan', view: 'view'},
  {insepectiondate: new Date(), assignedengineer: 'Zelalem', sitetown: 'Ayat', view: 'view'},
  {insepectiondate: new Date(), assignedengineer: 'Zelalem', sitetown: 'Ayat', view: 'view'},
  {insepectiondate: new Date(), assignedengineer: 'Zelalem', sitetown: 'Tafo', view: 'view'},
  {insepectiondate: new Date(), assignedengineer: 'Zelalem', sitetown: 'Yeka Abado', view: 'view'},
  ];

const ELEMENT_DATA2: PeriodicElement2[] = [
  {filename: 'file2', createddate: new Date(), createdby: 'Biruk', view: 'view'},
  {filename: 'file3', createddate: new Date(), createdby: 'Biruk', view: 'view'},
  {filename: 'file4', createddate: new Date(), createdby: 'Biruk', view: 'view'},
  {filename: 'file1', createddate: new Date(), createdby: 'Biruk', view: 'view'},
  {filename: 'file5', createddate: new Date(), createdby: 'Biruk', view: 'view'},
  {filename: 'file6', createddate: new Date(), createdby: 'Biruk', view: 'view'},
  {filename: 'file7', createddate: new Date(), createdby: 'Biruk', view: 'view'},
  ];

@Component({
  selector: 'app-siteinspection',
  templateUrl: './siteinspection.component.html',
  styleUrls: ['./siteinspection.component.css']
})
export class SiteinspectionComponent {
  displayedColumns: string[] = [ 'insepectiondate', 'assignedengineer', 'sitetown','view'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = [ 'filename', 'createddate', 'createdby','view'];
  dataSource2 = ELEMENT_DATA2;

  district: requesterdistrict[]=[
    {value: 'Mexico', viewValue: 'Mexico'},
    {value: 'CIBD', viewValue: 'CIBD'},
    {value: 'MSME Retail', viewValue: 'MSME Retail'},
  ];
}
