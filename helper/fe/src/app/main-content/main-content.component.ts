import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit {
  ngOnInit(): void {
  }
  selectedNavItem: string = "Dash Board";
  actionOwner: string = "Home";
  actionType: string = "Dash Board";

  updateMain(selectdItem: string) {
    switch (selectdItem) {
      
      case 'Account Management':
        this.selectedNavItem = 'Account Management';
        this.actionOwner = 'User';
        this.actionType = 'Reset Account';
        break;
      case 'wltool':
        this.selectedNavItem = 'Tools';
        this.actionOwner = 'Admin';
        this.actionType = 'White Listing';
        break;
      case 'scMapper':
        this.selectedNavItem = 'Tools';
        this.actionOwner = 'Admin';
        this.actionType = 'Code Mapper';
        break;
      case 'jLogger':
        this.selectedNavItem = 'Tools';
        this.actionOwner = 'Admin';
        this.actionType = 'Jire Robot';
        break;
      case 'ftpSimulator':
        this.selectedNavItem = 'Tools';
        this.actionOwner = 'Admin';
        this.actionType = 'FTP Simulator';
        break;
      default:
        this.selectedNavItem = 'Dash Board';
        this.actionOwner = 'Home';
        this.actionType = 'Dash Board';
        break;




    }
   
  }
}
