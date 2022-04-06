import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from "./nav-menu.component";
import { AppRoutingModule } from "../../../app-routing.module";
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [NavMenuComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule
  ],
  exports: [NavMenuComponent]
})
export class NavMenuModule { }
