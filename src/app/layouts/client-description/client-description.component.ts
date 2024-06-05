import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';
import { addIcons } from 'ionicons';
import { arrowUp, arrowDown, arrowDownCircle, arrowUpCircle, arrowUpCircleOutline, arrowDownCircleOutline, addCircle, addSharp } from 'ionicons/icons'

@Component({
  selector: 'app-client-description',
  templateUrl: './client-description.component.html',
  styleUrls: ['./client-description.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, TruncatePipe]
})
export class ClientDescriptionComponent implements OnInit {

  truncate: boolean = true;

  text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Senectus et netus et malesuada fames ac turpis. Nisl suscipit adipiscing bibendum est ultricies integer quis. Metus dictum at tempor commodo ullamcorper a. Cras semper auctor neque vitae. Enim tortor at auctor urna nunc id cursus metus aliquam. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Lectus sit amet est placerat in. Convallis aenean et tortor at risus viverra. Consequat id porta nibh venenatis cras sed felis. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Habitant morbi tristique senectus et netus et malesuada fames. Sagittis aliquam malesuada bibendum arcu vitae. Malesuada nunc vel risus commodo viverra maecenas accumsan. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Et sollicitudin ac orci phasellus egestas tellus rutrum. Faucibus turpis in eu mi bibendum neque. Platea dictumst vestibulum rhoncus est.`
  constructor() {
    addIcons({arrowUp, arrowDown, arrowDownCircleOutline, arrowUpCircleOutline, addSharp})
   }

  ngOnInit() {
  }

  toggleTruncate() {
    this.truncate = !this.truncate;
    console.log(this.truncate)
  }

}
