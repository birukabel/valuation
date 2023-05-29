import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { UsersComponent } from './pages/users/users.component';
import { ApplicationComponent } from './pages/application/application.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { ApplicationdetailComponent } from './pages/applicationdetail/applicationdetail.component';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { AssignengineerComponent } from './pages/assignengineer/assignengineer.component';
import { SiteinspectionComponent } from './pages/siteinspection/siteinspection.component';
import { ValuationComponent } from './pages/valuation/valuation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ValuationappAddEditComponentComponent } from './pages/valuationapp-add-edit.component/valuationapp-add-edit.component.component';
import { ValuationappdetailAddEditComponent } from './pages/valuationappdetail-add-edit/valuationappdetail-add-edit.component';
import { AttacheddocumentsAddEditComponent } from './pages/attacheddocuments-add-edit/attacheddocuments-add-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportsComponent,
    UsersComponent,
    ApplicationComponent,
    ApplicationdetailComponent,
    FileUploadComponent,
    AssignengineerComponent,
    SiteinspectionComponent,
    ValuationComponent,
    ValuationappAddEditComponentComponent,
    ValuationappdetailAddEditComponent,
    AttacheddocumentsAddEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatToolbarModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
