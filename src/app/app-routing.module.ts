import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from '../components/card/card.component';

const routes: Routes = [{ path: '', redirectTo: '/', pathMatch: 'full' }, { path: '', component: CardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
