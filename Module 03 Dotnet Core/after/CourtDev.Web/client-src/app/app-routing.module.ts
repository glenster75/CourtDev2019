import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecureComponent } from './secure/secure.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'secure', component: SecureComponent, canActivate: [MsalGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
