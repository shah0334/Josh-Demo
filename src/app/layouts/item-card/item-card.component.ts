import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class ItemCardComponent  implements OnInit {

  @Input() item: Item | undefined;

  showAttachments: boolean = false;
  constructor() { }

  ngOnInit() {}

  toggleAttachment() {
    this.showAttachments = !this.showAttachments;
  }
  // onSelectChange(element: HTMLSelectElement) {
  //   element.style.setProperty('--content', `'Qty ' "${element.value}`)
  // }
  // toggleExpandableSection() {
  //   const attachments = document.getElementById('attachments');
  //   const expandBtn = document.querySelector('.expand-btn i');
  //   if (attachments.style.display === 'none' || attachments.style.display === '') {
  //     attachments.style.display = 'block';
  //     expandBtn.classList.remove('fa-angle-down');
  //     expandBtn.classList.add('fa-angle-up');
  //   } else {
  //     attachments.style.display = 'none';
  //     expandBtn.classList.remove('fa-angle-up');
  //     expandBtn.classList.add('fa-angle-down');
  //   }
  // }
}
