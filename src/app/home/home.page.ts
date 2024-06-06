import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ToolbarComponent } from '../layouts/toolbar/toolbar.component';
import { FooterComponent } from '../layouts/footer/footer.component';
import { ClientDescriptionComponent } from '../layouts/client-description/client-description.component';
import { IonicModule } from '@ionic/angular';
import { ItemCardComponent } from '../layouts/item-card/item-card.component';
import { Item } from '../models/item.model';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './total.pipe';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ToolbarComponent, FooterComponent, ClientDescriptionComponent, IonicModule, ItemCardComponent, CommonModule, TotalPipe],
})
export class HomePage {
  constructor() { }

  items: Item[] = [
    {
      name: 'Sony XBR75X900F',
      description: '75" Class HDR UHD Smart LED TV',
      imageUrl: '/assets/images/item-img.avif',
      quantity: 1,
      price: 2503,
      attachments: [
        {
          name: 'Strong SM-T-L',
          description: 'Strng Mount - Tilt - 36-80',
          imageUrl: '../../../assets/images/stand.webp',
          quantity: 1,
          price: 130,
          attachments: []
        },
        {
          name: 'Labor Item',
          description: 'Sony XBR75X900F',
          imageUrl: '/assets/images/spanner.png',
          quantity: 1,
          price: 130,
          attachments: []
        },
      ]
    },
    {
      name: 'Sony XBR75X900F',
      description: '75" Class HDR UHD Smart LED TV',
      imageUrl: '/assets/images/item-img.avif',
      quantity: 1,
      price: 2503,
      attachments: [
      ]
    }
  ]

  getTotal(items: Item[]) {
    return items.reduce((sum, item, index) => {
      sum =  sum + (item.price * item.quantity);

      if(item.attachments.length) {
        sum = sum + this.getTotal(item.attachments)
      }

      return sum;
    }, 0)
  }
}

