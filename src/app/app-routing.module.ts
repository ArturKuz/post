import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialToolsPageComponent } from './pages/social-tools-page/social-tools-page.component';

const routes: Routes = [
  { path: '**',  redirectTo: '/tools'  },
  { path: 'tools', component: SocialToolsPageComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
