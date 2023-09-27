import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './page/transactions/transactions.component';
import { TransactionCardComponent } from './component/transaction-card/transaction-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [AppComponent, TransactionsComponent, TransactionCardComponent, TopBarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
