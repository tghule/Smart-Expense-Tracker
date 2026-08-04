import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-accounts',
  standalone: true,
  templateUrl: 'accounts.page.html',
  styleUrls: ['accounts.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class AccountsPage {}
