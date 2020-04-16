import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { PostRequestComponent } from './post-request/post-request.component';


const routes: Routes = [
  {path: 'home', component: LoginComponentComponent},
  {path: 'request', component: PostRequestComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: '**', component: LoginComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
