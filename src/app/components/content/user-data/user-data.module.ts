import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserDataComponent} from "./user-data.component";



@NgModule({
  declarations: [UserDataComponent],
  imports: [
    CommonModule
  ],
  exports: [UserDataComponent]
})
export class UserDataModule { }
