import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ToolbarComponent } from '../layouts/toolbar/toolbar.component';
import { FooterComponent } from '../layouts/footer/footer.component';
import { ClientDescriptionComponent } from '../layouts/client-description/client-description.component';
import { IonicModule } from '@ionic/angular';
import { ItemCardComponent } from '../layouts/item-card/item-card.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ToolbarComponent, FooterComponent, ClientDescriptionComponent, IonicModule, ItemCardComponent],
})
export class HomePage {
  constructor() { }
}

