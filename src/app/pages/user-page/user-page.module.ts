import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageComponent } from "./user-page.component";
import { ContentModule } from "../../components/content/content.module";
import { AvatarModule } from "../../components/content/avatar/avatar.module";
import { NavMenuModule } from "../../components/content/nav-menu/nav-menu.module";
import { SettingsModule } from "../../components/content/settings/settings.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UserPageComponent],
  imports: [
    CommonModule,
    ContentModule,
    AvatarModule,
    NavMenuModule,
    SettingsModule,
    RouterModule
  ],
  exports: [UserPageComponent]
})
export class UserPageModule { }
