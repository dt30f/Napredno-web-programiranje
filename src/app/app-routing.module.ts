import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MachineSearchComponent} from "./components/machine-search/machine-search.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {AllUsersComponent} from "./components/all-users/all-users.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {EditUserComponent} from "./components/edit-user/edit-user.component";
import {MachineCreateComponent} from "./components/machine-create/machine-create.component";
import {ErrorHistoryComponent} from "./components/error-history/error-history.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'allUsers',
    component: AllUsersComponent,
   // canActivate: [AuthGuard],
   // canDeactivate: [AuthGuard]
  },
  {
    path: 'addUser',
    component: AddUserComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard]
  },
  {
    path: 'editUser/:id',
    component: EditUserComponent,
   // canActivate: [AuthGuard],
   // canDeactivate: [AuthGuard]
  },
  {
    path: 'machineSearch',
    component: MachineSearchComponent
  },
  {
    path: 'createMachine',
    component: MachineCreateComponent,
  },
  {
    path: 'errorHistory',
    component: ErrorHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
