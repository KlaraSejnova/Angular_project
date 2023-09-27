import { Component } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  title = 'Get inspired';
  subtitle = 'Extra text';
}
