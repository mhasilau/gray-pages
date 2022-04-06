import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from "./pages/user-page/user-page.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { SettingsComponent } from "./components/content/settings/settings.component";
import { UserDataComponent } from "./components/content/user-data/user-data.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { NewsComponent } from "./components/content/news/news.component";

const innerRoutes: Routes = [
  { path: 'settings', component: SettingsComponent},
  { path: 'user', component: UserDataComponent },
  { path: 'news', component: NewsComponent },
];

const routes: Routes = [
  { path: '', component: UserPageComponent, children: innerRoutes },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    BrowserModule
  ]
})
export class AppRoutingModule { }
