import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { GuardGuard } from './guard.guard';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainComponent } from './main/main.component';

//const routes: Routes = []; // sets up routes constant where you define your routes
const routes: Routes = [
  {
    path: 'one',
    component: LoginComponent,
    // children: [
    //   {
    //     path: 'childa', // child route path
    //     component: HelloComponent, // child route component that the router renders
    //   },
    //   // { path: 'childa/:id', component: TwoComponent },
    //   {
    //     path: 'childb',
    //     component: TwoComponent, // another child route component that the router renders
    //   },
    // ],
  },
  { path: 'two/:id', component: MainComponent, canActivate: [GuardGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [GuardGuard] },
  // { path: 'details', component: DetailsComponent, canActivate: [GuardGuard] },
  // { path: 'create', component: CreateComponent, canActivate: [GuardGuard] },
  // { path: 'edit', component: EditComponent, canActivate: [GuardGuard] },
  // { path: 'two/:id', component: TwoComponent },
  // { path: 'three', component: ThreeComponent },
  // { path: 'three/:id', component: ThreeComponent },
  // { path: '', redirectTo: '/main', pathMatch: 'full' }, // redirect to `one`
  { path: '**', component: LoginComponent },
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
