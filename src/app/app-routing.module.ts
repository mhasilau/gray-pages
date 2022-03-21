import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from "./pages/user-page/user-page.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";

const routes: Routes = [
  { path: '', component: UserPageComponent},
  // { path: 'settings', component: SettingsComponent},
  { path: 'sign-in', component: SignInComponent },
  // { path: 'sign-up', component: SignUpComponent },
  // { path: 'news', component: NewsComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    BrowserModule
  ]
})
export class AppRoutingModule { }
