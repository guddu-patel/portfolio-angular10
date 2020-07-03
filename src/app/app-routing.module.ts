import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';
import { AdminAddupdatePostComponent } from './admin-addupdate-post/admin-addupdate-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'post', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },


  // admin routes
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin/post', component: AdminAddupdatePostComponent, canActivate: [AuthGuard] },
  { path: 'admin/post/:id', component: AdminAddupdatePostComponent, canActivate: [AuthGuard] },

  // route not found
  { path: '**', component: ErrorComponent }
];
const components: any = [
  DashboardComponent,
  LoginComponent,
  AdminDashboardComponent,
  ErrorComponent,
  AdminAddupdatePostComponent,
  PostListComponent,
  PostDetailComponent,

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingComponent = components
