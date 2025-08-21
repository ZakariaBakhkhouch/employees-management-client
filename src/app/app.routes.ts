import { Routes } from '@angular/router';
import { IndexComponent } from './pages/employees/index/index.component';
import { AddComponent } from './pages/employees/add/add.component';

export const routes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full'},
    { path: 'employees', component: IndexComponent },
    { path: 'employees/add', component: AddComponent },
];
