import { Component} from '@angular/core';



interface requesterdistrict {
  value: string;
  viewValue: string;
}

interface yesnooption {
  value: string;
  viewValue: string;
}

export interface PeriodicElement2 {
  insepectiondate: Date;
  assignedengineer: string;
  sitetown: string;
  view: string;
}

export interface PeriodicElement {
  propertyowner: string;
  requestedby: string;
  creditrequested: number;
  requestdate: Date;
  view: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {requestedby: 'CIBD', propertyowner: 'Biruk', creditrequested: 100000000, requestdate: new Date(), view: 'view'},
  {requestedby: 'CIBD', propertyowner: 'Zelalem', creditrequested: 30000000, requestdate: new Date(), view: 'view'},
  {requestedby: 'CIBD', propertyowner: 'Abebe', creditrequested: 20000000, requestdate: new Date(), view: 'view'},
  {requestedby: 'CIBD', propertyowner: 'Ayele', creditrequested: 4000000, requestdate: new Date(), view: 'view'},
  {requestedby: 'CIBD', propertyowner: 'Araya', creditrequested: 50000000, requestdate: new Date(), view: 'view'},
  {requestedby: 'CIBD', propertyowner: 'Bogale', creditrequested: 12000000, requestdate: new Date(), view: 'view'},
  {requestedby: 'CIBD', propertyowner: 'Biniam', creditrequested: 8000000, requestdate: new Date(), view: 'view'},
  {requestedby: 'CIBD', propertyowner: 'Behailu', creditrequested: 90000000, requestdate:new Date(), view: 'view'},
  {requestedby: 'CIBD', propertyowner: 'Getenet', creditrequested: 18000000, requestdate: new Date(), view: 'view'},
  {requestedby: 'CIBD', propertyowner: 'Kirubel', creditrequested: 13000000, requestdate: new Date(), view: 'view'},
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  {insepectiondate: new Date(), assignedengineer: 'Zelalem', sitetown: 'Mexico Area', view: 'view'},
  {insepectiondate: new Date(), assignedengineer: 'Zelalem', sitetown: 'Kera Area', view: 'view'},
  {insepectiondate: new Date(), assignedengineer: 'Zelalem', sitetown: 'Gelan', view: 'view'},
  {insepectiondate: new Date(), assignedengineer: 'Zelalem', sitetown: 'Ayat', view: 'view'},
  {insepectiondate: new Date(), assignedengineer: 'Zelalem', sitetown: 'Ayat', view: 'view'},
  {insepectiondate: new Date(), assignedengineer: 'Zelalem', sitetown: 'Tafo', view: 'view'},
  {insepectiondate: new Date(), assignedengineer: 'Zelalem', sitetown: 'Yeka Abado', view: 'view'},
  ];
  

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.css']
})
export class ValuationComponent  {  
 
  displayedColumns: string[] = [ 'propertyowner', 'creditrequested', 'requestdate','requestedby','view'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = [ 'insepectiondate', 'assignedengineer', 'sitetown','view'];
  dataSource2 = ELEMENT_DATA2;

  district: requesterdistrict[]=[
    {value: 'Mexico', viewValue: 'Mexico'},
    {value: 'CIBD', viewValue: 'CIBD'},
    {value: 'MSME Retail', viewValue: 'MSME Retail'},
  ];

  yesno: yesnooption[]=[
    {value: 'Yes', viewValue: 'Yes'},
    {value: 'No', viewValue: 'No'},
  ]; 

}
