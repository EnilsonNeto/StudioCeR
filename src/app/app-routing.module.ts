import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SchedulingComponent } from './components/scheduling/scheduling.component';
import { CamilleComponent } from './components/camille/camille.component';
import { ReneeComponent } from './components/renee/renee.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'scheduling',
    component: SchedulingComponent,
  },
  {
    path: 'camille',
    component: CamilleComponent,
  },
  {
    path: 'renee',
    component: ReneeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
