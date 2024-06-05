import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { book, documentText, people, card, ellipsisHorizontal } from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class FooterComponent implements OnInit {

  constructor() {
    addIcons({ book, documentText, people, card, ellipsisHorizontal })
  }

  ngOnInit() { }

}
