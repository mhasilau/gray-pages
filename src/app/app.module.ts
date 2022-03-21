import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserPageModule } from "./pages/user-page/user-page.module";
import { HeaderModule } from "./components/header/header.module";
import { FooterModule } from "./components/footer/footer.module";
import { AppRoutingModule } from "./app-routing.module";
import { ContentModule } from "./components/content/content.module";
import { SignInModule } from "./pages/sign-in/sign-in.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserPageModule,
    HeaderModule,
    FooterModule,
    AppRoutingModule,
    ContentModule,
    SignInModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
