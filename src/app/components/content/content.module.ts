import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from "./content.component";
import { UserDataModule}  from "./user-data/user-data.module";
import { RouterModule}  from "@angular/router";


@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    UserDataModule,
    RouterModule
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
