import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnglishComponent } from './english/english.component';
import { PortuguesComponent } from './portugues/portugues.component';

const routes: Routes = [
  { path: 'en', component: EnglishComponent },
  { path: 'pt', component: PortuguesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
