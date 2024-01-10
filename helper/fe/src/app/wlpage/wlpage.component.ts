import { Component } from '@angular/core';
@Component({
  selector: 'app-wlpage',
  templateUrl: './wlpage.component.html',
  styleUrl: './wlpage.component.css'
})
export class WlpageComponent  {


shortcodes:Array<string>=[""];
testingSc:Array<string>=["40","41","42"];
stagingSc:Array<string>=["30","31","32"];
test: any;
stag: any;
envsc: any;
choose(i: string) {
  console.log(i);
  
}
}
