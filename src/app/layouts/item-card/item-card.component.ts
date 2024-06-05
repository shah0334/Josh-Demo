import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ItemCardComponent  implements OnInit {

  @Input() item: Item = {
    name: 'Sony XBR75X900F',
    description: '75" Class HDR UHD Smart LED TV',
    imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png',
    quantity: 1,
    price: 2503,
    attachments: []
  }
  constructor() { }

  ngOnInit() {}

}
