import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { UsersComponent } from './pages/users/users.component';
import { ApplicationComponent } from './pages/application/application.component';
import { ApplicationdetailComponent } from './pages/applicationdetail/applicationdetail.component';
import { AssignengineerComponent } from './pages/assignengineer/assignengineer.component';
import { SiteinspectionComponent } from './pages/siteinspection/siteinspection.component';
import { ValuationComponent } from './pages/valuation/valuation.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'application',component:ApplicationComponent},
  {path:'applicationdetail',component:ApplicationdetailComponent},
  {path:'assignengineer',component:AssignengineerComponent},
  {path:'siteinspection',component:SiteinspectionComponent},
  {path:'valuation',component:ValuationComponent},
  {path:'reports',component:ReportsComponent},
  {path:'users',component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
