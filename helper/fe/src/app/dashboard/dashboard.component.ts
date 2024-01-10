import { Component, AfterViewInit } from '@angular/core';
declare function showStatistics():void;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {
  systems: Array<any>=[{name:"USSD Testing",ip:"uip"},{name:"USSD Staging",ip:"usip"},{name:"SMSC Testing",ip:"sip"},{name:"FTP Testing",ip:"fip"}];

  ngAfterViewInit(): void {
    showStatistics();
  }
  

}
