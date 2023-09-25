import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './page/transactions/transactions.component';

const routes: Routes = [
  {
    path: 'transactions', 
    component: TransactionsComponent,
    title: 'Transactions'
  },
  {
    path: '**',
    redirectTo: 'transactions'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
