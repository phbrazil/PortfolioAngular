import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnglishComponent } from './english/english.component';
import { PortuguesComponent } from './portugues/portugues.component';
import { TestsComponent } from './tests/tests.component';

const routes: Routes = [
  { path: 'en', component: EnglishComponent },
  { path: 'pt', component: PortuguesComponent },
  { path: 'test', component: TestsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
