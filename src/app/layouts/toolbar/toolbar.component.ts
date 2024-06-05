import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { ellipsisVertical, ellipsisHorizontal } from 'ionicons/icons'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ToolbarComponent implements OnInit {

  @Input() title: string = 'Living Room';

  constructor() {
    addIcons({ ellipsisHorizontal, ellipsisVertical })
  }

  ngOnInit() { }

}
