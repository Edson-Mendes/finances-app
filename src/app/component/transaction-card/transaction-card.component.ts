import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css'],
})
export class TransactionCardComponent {
  @Input({required: true}) transactionName: string = '';
  @Input({required: true}) transactionValue: string = '';
  @Input({required: true}) transactionType: string = '';
}
