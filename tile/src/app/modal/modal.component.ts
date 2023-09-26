import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  Options = [{ name: 'First' }, { name: 'Second' }, { name: 'Third' }];
}
