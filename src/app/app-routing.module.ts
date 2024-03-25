import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AProposComponent  } from './component/a-propos/a-propos.component';
const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'a-propos', component: AProposComponent}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }