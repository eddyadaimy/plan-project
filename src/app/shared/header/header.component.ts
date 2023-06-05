import { Component, OnInit } from '@angular/core';
import { subMenuModel } from '../submenu/subMenuModel/subMenu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
activeLink: string = 'Plan & Measure';
headerMenu:subMenuModel[] = [
  {displayName:'home' , routeUrl:''},
  {displayName:'Datahub' , routeUrl:''},
  {displayName:'Plan & Measure' , routeUrl:'plan-measure'},
  {displayName:'Analytics' , routeUrl:''},
  {displayName:'Beneficiaries' , routeUrl:''},
]
constructor(){
}
  ngOnInit(): void {
  }

}
