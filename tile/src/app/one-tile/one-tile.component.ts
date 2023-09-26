import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-one-tile',
  templateUrl: './one-tile.component.html',
  styleUrls: ['./one-tile.component.css'],
})
export class OneTileComponent {
  Tails = [
    { title: 'Styles' },
    { title: 'Photos' },
    { title: 'Print templates' },
    { title: 'Colors' },
    { title: 'Videos' },
    { title: 'Shop' },
  ];
}
