import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubmenuComponent } from './submenu/submenu.component';


@NgModule({
  declarations: [
    SubmenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SubmenuComponent]
})
export class SharedModule { }
