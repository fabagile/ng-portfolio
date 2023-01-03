import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path: "", loadChildren: ()=> import('./pages/main/main.module').then(m=>m.MainModule)},
  {path: "footer", loadChildren: ()=> import('./pages/footer/footer.module').then(m=>m.FooterModule)},
  {path: "subscribers", loadChildren: ()=> import('./pages/subscriber-page/subscriber-page.module').then(m=>m.SubscriberPageModule)},
  // {path: "", loadChildren: ()=> import('./pages/main/main-routes.module').then(m=>m.PagesModule)},
  {path:"**", component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
