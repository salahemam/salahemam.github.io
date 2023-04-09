import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './components/my-cv/cv.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {path: 'my-cv', component: CVComponent},
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
