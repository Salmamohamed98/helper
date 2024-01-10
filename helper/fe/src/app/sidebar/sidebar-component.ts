import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-sidebar',
    templateUrl:'./sidebar.component.html',

})
export class SidebarComponent{
    @Output() navItem= new  EventEmitter<string>();
showMain(itemClicked: string) {
this.navItem.emit(itemClicked);
        
}}