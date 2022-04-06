import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../../app-routing.module";
import { MatButtonModule } from "@angular/material/button";
import {PageNotFoundComponent} from "./page-not-found.component";



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule
  ],
  exports: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
