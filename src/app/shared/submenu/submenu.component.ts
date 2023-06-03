import { Component, Input } from '@angular/core';
import { subMenuModel } from './subMenuModel/subMenu.interface';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent {
@Input() subMenu : subMenuModel[] = [];
activeLink:string = '';
}
