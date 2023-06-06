import { Component, Input, OnInit } from '@angular/core';
import { subMenuModel } from './subMenuModel/subMenu.interface';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent{

@Input() subMenu : subMenuModel[] = [];
@Input() activeLink:string = '';
@Input() spaceValue:string = '';

setCurrentLink(pageName:string){
  this.activeLink  = pageName;
  sessionStorage.setItem('pageLink',this.activeLink);
}

}
