import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  columnDefs = [
    {headerName: 'ClaimID', field: 'ClaimID'},
    {headerName: 'SSN', field: 'SSN'},
    {headerName: 'PersonID', field: 'PersonID'},
    {headerName: 'FirstName', field: 'FirstName'},
    {headerName: 'LastName', field: 'LastName'},
    {headerName: 'GeoZip', field: 'GeoZip'},
    {headerName: 'ClaimAmount', field: 'ClaimAmount'},
    {headerName: 'DateofService', field: 'DateofService'},
    {headerName: 'Valid', field: 'Valid'}    
  ];



  rowData = [];

   ngOnInit() {
    fetch('http://localhost:52901/api/claims/getclaimdata')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
  }

//   rowData = [
//     { UserID: 123, SSN: 234, PersonID: 35000,FirstName:'rajen',LastName:'A', GeoZip:232, ClaimAmount:2300, DateofService:12/12/2020, Valid:1},
//     {  UserID: 123, SSN: 234, PersonID: 35000,FirstName:'rajen',LastName:'A', GeoZip:232, ClaimAmount:2300, DateofService:12/12/2020, Valid:1 },
//     {  UserID: 123, SSN: 234, PersonID: 35000,FirstName:'rajen',LastName:'A', GeoZip:232, ClaimAmount:2300, DateofService:12/12/2020, Valid:1 }
// ];

// ngOnInit() {
// }
}
