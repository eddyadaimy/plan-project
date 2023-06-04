import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubmenuComponent } from './submenu/submenu.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    SubmenuComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SubmenuComponent, SideBarComponent]
})
export class SharedModule { }
