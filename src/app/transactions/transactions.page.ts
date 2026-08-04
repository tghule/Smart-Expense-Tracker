import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-transactions',
  standalone: true,
  templateUrl: 'transactions.page.html',
  styleUrls: ['transactions.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class TransactionsPage {}
