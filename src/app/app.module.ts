import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MachineSearchComponent } from './components/machine-search/machine-search.component';
import { LoginComponent } from './components/login/login.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { MachineCreateComponent } from './components/machine-create/machine-create.component';
import { ErrorHistoryComponent } from './components/error-history/error-history.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineSearchComponent,
    LoginComponent,
    AllUsersComponent,
    AddUserComponent,
    EditUserComponent,
    MachineCreateComponent,
    ErrorHistoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
