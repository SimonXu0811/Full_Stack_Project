import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { LoginComponent} from './login/login.component';
import { PatientdetailComponent} from './patientdetail/patientdetail.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'all', component: PatientlistComponent},
  {path: 'login', component: LoginComponent},
  {path: 'all/:name', component: PatientdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
